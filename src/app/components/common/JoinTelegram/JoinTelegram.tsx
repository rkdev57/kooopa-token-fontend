import { FC } from "react";
import s from "./JoinTelegram.module.scss";

const JoinTelegram: FC = () => {
  return (
    <div className={s.container}>
      <div className="container">
        <div className={s.content}>
          <img
            className={`img-fluid ${s.icon}`}
            src="/images/other/bxr-token_bg.png"
            alt=""
          />
          <div className={s.joinUs}>
            <h3 className={s.title}>Join the KRL group on Telegram</h3>
            <a className={`btn-app-default ${s.btnAction}`}>Join Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JoinTelegram;
