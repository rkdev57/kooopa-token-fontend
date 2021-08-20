import { FC, useEffect, useState } from "react";
import {
  Form,
  InputNumber,
  notification,
  Button,
  Statistic,
  Input,
  message,
} from "antd";
import Web3 from "web3";
import config from "../../../../config";
import { useUI } from "../../../contexts/AppContext";
import { FormRule } from "./FormRule";
import s from "./ClaimToken.module.scss";
import { SaleUserWalletAddress } from "../../../store/data/SaleUserWalletAddress";

const ClaimToken: FC = () => {
  const { wallet } = useUI();
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isAddressExists, setIsAddressExists] = useState(false);
  const [isCheckAvailabilty, setIsCheckAvailabilty] = useState(false);

  useEffect(() => {
    if (wallet.accounts[0]) {
      form.setFieldsValue({ walletAddress: wallet.accounts[0] });
    }
  }, [wallet]);

  const isWalletConnected = () => {
    if (!wallet.accounts || wallet.accounts.length === 0) {
      notification.error({ message: "Please connect your wallet!" });
      return false;
    }
    return true;
  };

  const onFormSubmit = (values: any) => {
    if (!isWalletConnected()) {
      return false;
    }

    const { walletAddress } = values;
    if (wallet.accounts[0] != walletAddress) {
      notification.error({
        message: "Please connect this address with wallet!",
      });
      return;
    }

    setIsLoading(true);
    // const isExists = SaleUserWalletAddress.includes(walletAddress);
    /* if (!isExists) {
      notification.error({ message: "The address has no available claim" });
      setIsLoading(false);
      return;
    } */

    const provider = wallet.provider ? wallet.provider : Web3.givenProvider;

    const web3 = new Web3(provider);
    const contractABI: any = config.transfer.contractABI;
    const TGEContract = new web3.eth.Contract(
      contractABI,
      config.transfer.contractAddress
    );

    TGEContract.methods
      .faucet()
      .send({ from: walletAddress })
      .catch((e: any) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const isAddressValid = () => {
    if (!form.getFieldValue("walletAddress")) {
      return false;
    }
    const test =
      !form.isFieldsTouched(true) ||
      !!form.getFieldsError().filter(({ errors }) => errors.length).length;
    console.log(
      "🚀 ~ file: ClaimToken.tsx ~ line 88 ~ isAddressValid ~ test",
      test
    );
    return (
      !form.isFieldsTouched(true) ||
      !!form.getFieldsError().filter(({ errors }) => errors.length).length
    );
  };

  const availabilityPreCheck = () => {
    if (!isWalletConnected()) {
      return false;
    }
    if (wallet.accounts[0]) {
      form.setFieldsValue({ walletAddress: wallet.accounts[0] });
    }
    setIsCheckAvailabilty(true);
  };

  return (
    <div className={s.container}>
      <div className={s.content}>
        <h3 className={s.title}>Claim your Kooopa token</h3>
        {!isCheckAvailabilty && (
          <div className={s.checkAvailibity}>
            <span>Check address if it has any claimable Kooopa Token</span>
            <button
              onClick={() => {
                availabilityPreCheck();
              }}
              className={`btn-app-default ${s.btnCheck}`}
            >
              Check
            </button>
          </div>
        )}
        {isCheckAvailabilty && (
          <Form form={form} onFinish={onFormSubmit}>
            <div className="amount-wrapper">
              <Form.Item name="walletAddress" rules={FormRule.walletAddress}>
                <Input className="amount" placeholder="Your wallet address" />
              </Form.Item>

              <div className={s.claimAction}>
                <button
                  onClick={() => {
                    setIsCheckAvailabilty(false);
                    setIsLoading(false);
                  }}
                  className={`btn-app-default ${s.btnCheck}`}
                >
                  Back
                </button>

                <Form.Item shouldUpdate>
                  {() => (
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={isLoading}
                      // disabled={!isAddressValid()}
                      className={`btn-app-default ${s.btnAction}`}
                    >
                      Claim
                    </Button>
                  )}
                </Form.Item>
              </div>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};

export default ClaimToken;
