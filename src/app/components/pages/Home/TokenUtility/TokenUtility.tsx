import { FC } from "react";
import { useTranslation } from "react-i18next";
import s from "./TokenUtility.module.scss";

const TokenUtility: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={s.container}>
      <div className="container">
        <div className="row">
          <div className={`col-md-12 d-flex align-items-center`}>
            <div className={s.content}>
              <h3 className={s.heading}>{t("TokenUtility.label")}</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className={s.contentWrapper}>
              <div className={s.iconWrapper}>
                <img className={s.icon} src="/images/icons/esport.svg" alt="" />
              </div>
              <div className={s.content}>
                <h3 className={`${s.title} ${s.firstSection}`}>
                  {t("TokenUtility.E_Sports.label")}
                </h3>
                <div className={s.singleContent}>
                  <p>{t("TokenUtility.E_Sports.description")}</p>
                  <ul>
                    <li>{t("TokenUtility.E_Sports.items.0")}</li>
                    <li>{t("TokenUtility.E_Sports.items.1")}</li>
                    <li>{t("TokenUtility.E_Sports.items.2")}</li>
                    <li>{t("TokenUtility.E_Sports.items.3")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={s.contentWrapper}>
              <div className={s.iconWrapper}>
                <img
                  className={s.icon}
                  src="/images/icons/staking.svg"
                  alt=""
                />
              </div>
              <div className={s.content}>
                <h3 className={s.title}>{t("TokenUtility.Staking.label")}</h3>
                <div className={s.singleContent}>
                  <p>{t("TokenUtility.Staking.description")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={s.contentWrapper}>
              <div className={s.iconWrapper}>
                <img
                  className={s.icon}
                  src="/images/icons/payment.svg"
                  alt=""
                />
              </div>
              <div className={s.content}>
                <h3 className={s.title}>{t("TokenUtility.Payment.label")}</h3>
                <div className={s.singleContent}>
                  <p>{t("TokenUtility.Payment.description")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={s.contentWrapper}>
              <div className={s.iconWrapper}>
                <img
                  className={s.icon}
                  src="/images/icons/governance.svg"
                  alt=""
                />
              </div>
              <div className={s.content}>
                <h3 className={s.title}>
                  {t("TokenUtility.Governance.label")}
                </h3>
                <div className={s.singleContent}>
                  <p>{t("TokenUtility.Governance.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenUtility;
