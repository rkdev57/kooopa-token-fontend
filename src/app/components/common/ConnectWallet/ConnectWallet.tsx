import { FC, useState } from "react";
import { Modal, notification, Spin } from "antd";

import s from "./ConnectWallet.module.scss";
import { useUI } from "../../../contexts/AppContext";

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

  const connectWallet = async () => {
    setIsLoading(true);
    if (window && typeof window.ethereum !== "undefined") {
      const ethereum = window.ethereum;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      onAccountConnected(accounts);
      setIsLoading(false);
      updateWallet(accounts);
      onClose();
      notification.success({ message: "Wallet connected" });
      return;
    }
    notification.error({ message: "Please install MetaMask" });
    setIsLoading(false);
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
            <button className="wallet-item" onClick={() => connectWallet()}>
              <img
                className="wallet-icon"
                src="/images/wallets/metamask.png"
                alt=""
              />
            </button>
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
