import { notification } from "antd";
import { FC, useState } from "react";
import ConnectWallet from "../ConnectWallet";

import s from "./Header.module.scss";

const Header: FC = () => {
  const [openConnectWallet, setConnectWallet] = useState(false);
  const [account, setAccount] = useState("");

  const copyWalletAddress = () => {
    navigator.clipboard.writeText(account);
    notification.success({ message: "Copied" });
  };

  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.headerItems}>
          <img
            className={`img-fluid ${s.logo}`}
            src="/images/logo.png"
            alt=""
          />
          <div>
            {!account && (
              <button
                className={`btn-app-default ${s.btnAction}`}
                onClick={() => setConnectWallet(true)}
              >
                Connect Wallet
              </button>
            )}
            {account && (
              <button
                className={`btn-app-default ${s.btnAction} ${s.walletDetails}`}
                onClick={() => copyWalletAddress()}
              >
                {account.slice(0, 5)}...{account.slice(-5)}
                <img
                  className={s.copy}
                  src="/images/icons/copy-primary.png"
                  alt=""
                />
              </button>
            )}
          </div>
        </div>
        <ConnectWallet
          open={openConnectWallet}
          onClose={() => setConnectWallet(false)}
          onAccountConnected={(accounts: string[]) => {
            if (accounts[0]) {
              setAccount(accounts[0]);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Header;
