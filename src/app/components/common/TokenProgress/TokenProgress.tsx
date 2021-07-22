import { Widget } from "@typeform/embed-react/build/index";
import { Form, InputNumber, notification, Button, Statistic } from "antd";
import Modal from "antd/lib/modal/Modal";
import moment from "moment";
import { FC, useEffect, useState } from "react";
import Web3 from "web3";
import config from "../../../../config";
import { useUI } from "../../../contexts/AppContext";
import { FormRule } from "./FormRule";
import s from "./TokenProgress.module.scss";

const TokenProgress: FC = () => {
  const { wallet } = useUI();
  const { Countdown } = Statistic;
  const [form] = Form.useForm();

  const [popupActive, setPopupActive] = useState(false);
  const [isDepositActive, setIsDepositActive] = useState(false);
  const [curentEthValue, setCurrentEthValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const ethToKoop = 10000000;
  const phaseDeadline = moment
    .utc(moment.utc("2021-07-26 11:59").toDate())
    .local()
    .format();
  // const phaseDeadline = moment("2021-07-26 11:59").format();

  const startProcess = () => {
    if (!isWalletConnected()) {
      return false;
    }
    setPopupActive(true);
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
    setIsLoading(true);
    const provider = wallet.provider ? wallet.provider : Web3.givenProvider;

    const web3 = new Web3(provider);
    const contractABI: any = config.contractABI;
    const TGEContract = new web3.eth.Contract(
      contractABI,
      config.contractAddress
    );

    TGEContract.methods
      .Invest()
      .send({
        from: wallet.accounts[0],
        value: web3.utils.toWei(values.amount.toString(), "ether"),
        gas: 50000,
        gasPrice: 25,
      })
      .then(function (receipt: any) {
        if (receipt) {
          notification.success({ message: "Amount deposited" });
        }
        setIsDepositActive(false);
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
          id={config.typeForm.formId}
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
    return (
      !form.isFieldsTouched(true) ||
      !!form.getFieldsError().filter(({ errors }) => errors.length).length
    );
  };

  const DepositAmount = () => {
    return (
      <Modal
        visible={true}
        onCancel={() => setIsDepositActive(false)}
        footer={null}
        className="deposit-popup"
      >
        <Form form={form} onFinish={onFinish}>
          <b className="form-title">Enter ETH amount</b>
          <div className="amount-wrapper">
            <Form.Item name="amount" rules={FormRule.depositAmount}>
              <InputNumber className="amount" placeholder="0.0" step={0.01} />
            </Form.Item>
            <div className="currency-wrapper">
              <img className="icon" src="/images/icons/ethereum.svg" alt="" />
              <span>ETH</span>
            </div>
          </div>
          <label>Min: 0.01 ETH and Max: 0.5 ETH</label>

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
    <div className={s.sectionWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className={s.content}>
              <span className={`d-block ${s.header}`}>
                Kooopa Token (KOO) Public Sale Phase 1
              </span>
              <p>Individual Cap 0.5 ETH = 5,000,000 KOO</p>

              <button
                className={`btn-app-default ${s.buyNow}`}
                onClick={() => startProcess()}
              >
                Start now
              </button>
              {popupActive && TypeFormComponent()}
              {isDepositActive && DepositAmount()}

              <p>1 KOO = 0.0000001 ETH</p>
              <p>1 ETH = 10,000,000 KOO</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className={s.progressContainer}>
              <div className={s.dataWrapper}>
                <div className={s.data}>
                  <span className={s.label}>TOTAL AMOUNT</span>
                  <span className={s.label}>250,000,000 $KOO</span>
                </div>
                <div className={s.data}>
                  <span className={s.label}>CLOSES IN</span>
                  <span className={s.value}>
                    <Countdown value={phaseDeadline} format="Dd Hh m[m] s[s]" />
                  </span>
                </div>

                <div className={s.progressBarContainer}>
                  <span className={s.progressBar}>
                    <span
                      className={s.bar}
                      style={{ width: `${curentEthValue / 0.25}%` }}
                    ></span>
                    <div
                      className={s.caps}
                      data-label="60% Soft Cap"
                      style={{ width: "60%" }}
                    ></div>
                    <div
                      className={s.caps}
                      data-label="90% Hoft Cap"
                      style={{ width: "90%" }}
                    ></div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenProgress;
