import { FC } from "react";
import TokenProgress, { KoopaInvest } from "../TokenProgress";
import s from "./PresaleToken.module.scss";

const PresaleToken: FC = () => {
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
                <span>KRL token</span>, the ERC-20 governance token for the KRL
                Universe
              </h1>
              <p>
                Holders will shape the future of Kart Racing League by signaling
                their support for upgrades to the ecosystem and directing usage
                of a Community Treasury.
              </p>
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
            <span className={s.subTitlte}>
              Kart Racing League (KRL) is a fast-paced arcade style kart racing
              NFT game where anyone can earn through skilled gameplay and
              contributions to the ecosystem. KRL token is the glue that binds
              all KRL community members together.
            </span>
            <a
              href="https://whitepaper.kartracingleague.com/"
              target="_blank"
              className={`btn-app-default ${s.btnAction}`}
            >
              Read Whitepaper
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresaleToken;
