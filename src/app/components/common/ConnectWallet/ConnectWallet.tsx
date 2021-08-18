import { FC, useState } from "react";
import { Modal, notification, Spin } from "antd";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

import s from "./ConnectWallet.module.scss";
import { useUI } from "../../../contexts/AppContext";
import config from "../../../../config";

interface Props {
  open: boolean;
  onClose: any;
  onAccountConnected: any;
}
export const ConnectWallet: FC<Props> = ({
  open,
  onClose,
  onAccountConnected,
}) => {
  const { updateWallet } = useUI();
  const [isLoading, setIsLoading] = useState(false);

  const metaMaskConnect = async () => {
    setIsLoading(true);
    if (window && typeof window.ethereum !== "undefined") {
      const ethereum = window.ethereum;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      afterWalletConnect(accounts);
      return;
    }
    notification.error({ message: "Please install MetaMask" });
    setIsLoading(false);
  };

  const walletConnect = async () => {
    setIsLoading(true);
    const provider: any = new WalletConnectProvider(config.walletConnect);
    //  Enable session (triggers QR Code modal)
    await provider.enable();
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    afterWalletConnect(accounts, provider);
  };

  const cashConnect = async () => {
    setIsLoading(true);
    setTimeout(() => {
      afterWalletConnect(["Cash  ..amt"], "cash");
    }, 1000);
  };

  const afterWalletConnect = (accounts: any, provider = "") => {
    onAccountConnected(accounts);
    setIsLoading(false);
    updateWallet({
      accounts,
      provider,
    });
    onClose();
    notification.success({ message: "Wallet connected" });
  };

  return (
    <div className={s.walletContainer}>
      <Modal
        title="Sign In to Kooopa Token"
        visible={open}
        onCancel={() => onClose()}
        footer={null}
        wrapClassName="wallet-modal"
      >
        {!isLoading && (
          <div className="wallet-list">
            <button className="wallet-item" onClick={() => metaMaskConnect()}>
              <img
                className="wallet-icon"
                src="/images/wallets/metamask.png"
                alt=""
              />
            </button>
            <button className="wallet-item" onClick={() => walletConnect()}>
              <img
                className="wallet-icon small"
                src="/images/wallets/walletconnect.png"
                alt=""
              />
            </button>
            {/* <button className="wallet-item" onClick={() => cashConnect()}>
              <img
                className="wallet-icon small"
                src="/images/wallets/cash-new.png"
                alt=""
              />
            </button> */}
          </div>
        )}
        {isLoading && (
          <div className="wallet-loading">
            <Spin />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ConnectWallet;
