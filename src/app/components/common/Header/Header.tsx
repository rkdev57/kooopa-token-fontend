import { FC } from "react";
import s from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.headerItems}>
          <img
            className={`img-fluid ${s.logo}`}
            src="/images/logo.png"
            alt=""
          />
          <button className={`btn-app-default ${s.btnAction}`}>
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
