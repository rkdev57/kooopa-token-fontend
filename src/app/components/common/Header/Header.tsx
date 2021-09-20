import { notification } from "antd";
import { FC, useState } from "react";
import ClaimToken from "../ClaimToken";
import ConnectWallet from "../ConnectWallet";

import s from "./Header.module.scss";

const Header: FC = () => {
  const [openConnectWallet, setConnectWallet] = useState(false);
  const [claimToken, setClaimToken] = useState(false);
  const [account, setAccount] = useState("");

  const copyWalletAddress = () => {
    navigator.clipboard.writeText(account);
    notification.success({ message: "Copied" });
  };

  const beforeActionCheck = () => {
    if (window.innerWidth <= 1024) {
      notification.error({
        message: "Only available on desktop",
      });
      return false;
    }
    return true;
  };

  const connectWallet = () => {
    if (!beforeActionCheck()) {
      return;
    }
    setConnectWallet(true);
  };

  const claimAirdrop = () => {
    if (!beforeActionCheck()) {
      return;
    }
    setClaimToken(!claimToken);
  };

  return (
    <div className={s.header}>
      <div className={s.shadowGlow}></div>
      <div className="container">
        <div className={s.headerItems}>
          <img
            className={`img-fluid ${s.logo}`}
            src="/images/krl-logo.png"
            alt=""
          />
          <div>
            {!account && (
              <button
                className={`btn-app-default ${s.btnAction} ${s.connectWallet}`}
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            )}
            {account && (
              <button
                className={`btn-app-default ${s.btnAction} ${s.walletDetails} ${s.connectWallet}`}
                onClick={() => copyWalletAddress()}
              >
                {account.slice(0, 6)}...{account.slice(-4)}
                <img
                  className={s.copy}
                  src="/images/icons/copy-primary.png"
                  alt=""
                />
              </button>
            )}
            
            {/* <button
              className={`btn-app-default ml-2 ${s.btnAction} ${s.walletDetails} ${s.claimToken}`}
              onClick={claimAirdrop}
            >
              Airdrop
            </button> */}
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

        {claimToken && (
          <ClaimToken
            onClose={() => {
              setClaimToken(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
