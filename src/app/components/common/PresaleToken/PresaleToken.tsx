import { FC } from "react";
import { useTranslation } from "react-i18next";
import TokenProgress, { KoopaInvest } from "../TokenProgress";
import s from "./PresaleToken.module.scss";

const PresaleToken: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={s.container}>
      <div className="container">
        <div className="row">
          <div className={`col-md-5 ${s.logoWrapper}`}>
            <img
              className={`img-fluid ${s.logo}`}
              src="/images/other/koo-style-01.png"
              alt=""
            />
          </div>
          <div className="col-md-7 d-flex align-items-center">
            <div className={s.content}>
              <h1 className={s.heading}>
                <span>{t("KRL token")}</span>,{" "}
                {t("the ERC-20 governance token for the KRL Universe")}
              </h1>
              <p>{t("Holders will shape the future...")}</p>
              {/* <span className={s.startingSoon}>
                KOO Public Sale Round 2 Starting Soon
              </span> */}

              {/* <a
                href="https://lnarw4vdngy.typeform.com/to/nblkTzUD"
                target="_blank"
                className={`btn-app-default ${s.joinWaitlist}`}
              >
                Join Waitlist
              </a> */}
              <div className={`${s.joinWaitlist}`}>
                <KoopaInvest />
              </div>
            </div>
          </div>
        </div>

        <div
          className={s.preSaleBanner}
          style={{ backgroundImage: 'url("/images/other/main-banner.png")' }}
        >
          <div className={s.content}>
            <span className={s.subTitlte}>{t("about_KRL")}</span>
            <a
              href="https://whitepaper.kartracingleague.com/"
              target="_blank"
              className={`btn-app-default ${s.btnAction}`}
            >
              {t("Read Whitepaper")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresaleToken;
