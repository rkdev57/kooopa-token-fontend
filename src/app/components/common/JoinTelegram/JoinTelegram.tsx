import { FC } from "react";
import { useTranslation } from "react-i18next";
import s from "./JoinTelegram.module.scss";

const JoinTelegram: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <div className="container">
        <div
          className={s.content}
          style={{ backgroundImage: 'url("/images/other/join-telegram.png")' }}
        >
          <div className={s.joinUs}>
            <h3 className={s.title}>{t("Join the KRL group on Telegram")}</h3>
            <a
              href="https://t.me/kartracingleague"
              target="_blank"
              className={`btn-app-default ${s.btnAction}`}
            >
              {t("Join Now")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JoinTelegram;
