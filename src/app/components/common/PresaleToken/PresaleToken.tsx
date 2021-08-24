import { FC } from "react";
import s from "./PresaleToken.module.scss";

const PresaleToken: FC = () => {
  return (
    <div className={s.container}>
      <div className="container">
        <div className="row">
          <div className={`col-md-5 ${s.logoWrapper}`}>
            <img
              className={`img-fluid ${s.logo}`}
              src="/images/icons/koo-circle.svg"
              alt=""
            />
          </div>
          <div className="col-md-5 d-flex align-items-center">
            <div className={s.content}>
              <h1 className={s.heading}>
                <span>KOO</span>, the ERC-20 governance token for the KRL
                Universe
              </h1>
              <p>
                Holders will shape the future of Kooopa Racing League by
                signaling their support for upgrades to the ecosystem and
                directing usage of a Community Treasury.
              </p>
              <span className={s.startingSoon}>
                KOO Public Sale Round 2 Starting Soon
              </span>
            </div>
          </div>
        </div>

        <div
          className={s.preSaleBanner}
          style={{ backgroundImage: 'url("/images/other/discover-bg.png")' }}
        >
          <div className={s.content}>
            <span className={s.subTitlte}>
              Kooopa Racing League (KRL) is a fast-paced arcade style kart
              racing NFT game where anyone can earn through skilled gameplay and
              contributions to the ecosystem. KOO is the glue that binds all KRL
              community members together.
            </span>
            <a className={`btn-app-default ${s.btnAction}`}>Read Whitepaper</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresaleToken;
