import { Widget } from "@typeform/embed-react/build/index";
import {
  Form,
  InputNumber,
  notification,
  Button,
  Statistic,
  Checkbox,
} from "antd";
import Modal from "antd/lib/modal/Modal";
import moment from "moment";
import { FC, useEffect, useState } from "react";
import Web3 from "web3";
import config from "../../../../config";
import { useUI } from "../../../contexts/AppContext";
import { investmentService } from "../../../services";
import AppConstant from "../../../utility/AppConstant";
import { CashWallet } from "../wallets";
import { DepositAmountMapper } from "./DepositAmountMapper";
import { FormRule } from "./FormRule";
import s from "./TokenProgress.module.scss";

const KoopaInvest: FC = () => {
  const { wallet } = useUI();
  const { Countdown } = Statistic;
  const [form] = Form.useForm();

  const [popupActive, setPopupActive] = useState(false);
  const [isDepositActive, setIsDepositActive] = useState(false);
  const [curentEthValue, setCurrentEthValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [onDepositFormSubmit, setOnDepositFormSubmit] = useState(false);

  const ethToKoop = 10000000;
  const phaseDeadline = moment
    .utc(moment.utc("2021-08-08 23:59").toDate())
    .local()
    .format();
  // const phaseDeadline = moment("2021-07-26 11:59").format();

  const startProcess = () => {
    const eth: any = window.ethereum;
    const AppConstantTemp: any = AppConstant;
    if (AppConstantTemp.NetworkId[eth.networkVersion] !== "Mainnet") {
      notification.error({
        message: `Switch network to Mainnet`,
      });
      return false;
    }
    if (window.innerWidth <= 1024) {
      notification.error({
        message: "Only available on desktop",
      });
      return false;
    }
    if (!isWalletConnected()) {
      return false;
    }
    // setPopupActive(true);
    setIsDepositActive(true);
  };

  const isWalletConnected = () => {
    if (!wallet.accounts || wallet.accounts.length === 0) {
      notification.error({ message: "Please connect your wallet!" });
      return false;
    }
    return true;
  };

  const onFinish = (values: any) => {
    if (!isWalletConnected()) {
      return false;
    }
    setOnDepositFormSubmit(true);
    if (wallet.provider === "cash") {
      setIsDepositActive(false);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const provider = wallet.provider ? wallet.provider : Web3.givenProvider;

    const web3 = new Web3(provider);
    const contractABI: any = config.round2Invest.phase1.contractABI;
    const TGEContract = new web3.eth.Contract(
      contractABI,
      config.round2Invest.phase1.contractAddress
    );

    TGEContract.methods
      .Invest()
      .send({
        from: wallet.accounts[0],
        value: web3.utils.toWei(values.amount.toString(), "ether"),
        gas: 150000,
        gasPrice: web3.utils.toWei("100", "gwei"),
      })
      .then(function (receipt: any) {
        if (receipt) {
          notification.success({ message: "Amount deposited" });
          // Trigger your custom api after investment
          investmentService.postInvestment({
            to: wallet.accounts[0],
            amount: ((+values.amount * 4000) / 0.001).toFixed().toString(),
          });
        }
        setIsDepositActive(false);
        setIsLoading(false);
      })
      .catch((e: Error) => {
        notification.error({ message: e.message });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const showBalance = async () => {
    if (Web3.givenProvider) {
      const web3 = new Web3(Web3.givenProvider);
      const balance = await web3.eth.getBalance(config.contractAddress);
      const entherValue = +web3.utils.fromWei(balance);
      setCurrentEthValue(entherValue);
    }
  };

  useEffect(() => {
    showBalance();
  }, []);

  const TypeFormComponent = () => {
    return (
      <Modal
        visible={true}
        onCancel={() => {
          setPopupActive(false);
        }}
        footer={null}
        wrapClassName="typeform-popup"
      >
        <Widget
          id={
            wallet.provider === "cash"
              ? config.typeForm.cashConnectFormId
              : config.typeForm.formId
          }
          className="typeform"
          onSubmit={() => {
            setTimeout(() => {
              setIsDepositActive(true);
              setPopupActive(false);
            }, 1000);
          }}
        />
      </Modal>
    );
  };

  const isDepostValid = () => {
    if (!form.getFieldValue("acceptTnc")) {
      return true;
    }
    return (
      (!form.isFieldsTouched(true) && form.getFieldValue("acceptTnc")) ||
      !!form.getFieldsError().filter(({ errors }) => errors.length).length
    );
  };

  const DepositAmount = () => {
    const selectedDepositMethod = DepositAmountMapper[wallet.provider]
      ? DepositAmountMapper[wallet.provider]
      : DepositAmountMapper.default;

    const selectedFormRule =
      wallet.provider === "cash"
        ? FormRule.cashDepositAmount
        : FormRule.depositAmount;

    return (
      <Modal
        visible={true}
        onCancel={() => setIsDepositActive(false)}
        footer={null}
        className="deposit-popup"
      >
        <Form form={form} onFinish={onFinish}>
          <b className="form-title">{selectedDepositMethod.label}</b>
          <div className="amount-wrapper">
            <Form.Item name="amount" rules={selectedFormRule}>
              <InputNumber
                className="amount"
                placeholder="0.0"
                step={wallet.provider === "cash" ? 1 : 0.01}
              />
            </Form.Item>
            <div className="currency-wrapper">
              <img className="icon" src={selectedDepositMethod.icon} alt="" />
              <span>{selectedDepositMethod.currency}</span>
            </div>
          </div>
          <Form.Item
            name="acceptTnc"
            valuePropName="checked"
            className={`${s.acceptTerms} accept--tnc`}
          >
            <Checkbox>
              I accept the{" "}
              <a
                href="https://app.gitbook.com/@kart-racing-league/s/kart-racing-league/"
                target="_blank"
              >
                terms and conditions
              </a>
            </Checkbox>
          </Form.Item>
          <label>{selectedDepositMethod.minmumRequired}</label>

          <Form.Item>
            <div className="form-action">
              <Form.Item shouldUpdate>
                {() => (
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={isLoading}
                    disabled={isDepostValid()}
                    className={`btn-app-default`}
                  >
                    Submit
                  </Button>
                )}
              </Form.Item>
              <button
                className={`btn-app-default`}
                type="button"
                onClick={() => {
                  setIsDepositActive(false);
                  setIsLoading(false);
                }}
              >
                Cancel
              </button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  return (
    <div>
      <button
        className={`btn-app-default ${s.buyKoo}`}
        onClick={() => startProcess()}
      >
        Buy KRL Token
      </button>
      {popupActive && TypeFormComponent()}
      {isDepositActive && DepositAmount()}
      {onDepositFormSubmit && wallet.provider === "cash" && (
        <CashWallet
          amount={form.getFieldValue("amount")}
          onClose={() => {
            setOnDepositFormSubmit(false);
          }}
        />
      )}
    </div>
  );
};

export default KoopaInvest;
