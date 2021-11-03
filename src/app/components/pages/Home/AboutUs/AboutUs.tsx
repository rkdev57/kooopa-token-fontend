import { FC } from "react";
import { useTranslation } from "react-i18next";
import s from "./AboutUs.module.scss";

const AboutUs: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={s.content}>
              <h3 className={s.title}>
                {t("Read the full Kart Racing League whitepaper")}
              </h3>
              <a
                href="https://whitepaper.kartracingleague.com/"
                target="_blank"
                className={`btn-app-default ${s.btnAction}`}
              >
                {t("Read Whitepaper")}
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className={s.content}>
              <h3 className={s.title}>{t("Review KRL Token contract")}</h3>
              <a
                href="https://polygonscan.com/token/0xc17b109e146934d36c33e55fade9cbda791b0366"
                target="_blank"
                className={`btn-app-default ${s.btnAction}`}
              >
                {t("Review Contract")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
