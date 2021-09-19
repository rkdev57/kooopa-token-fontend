import { FC } from "react";
import s from "./AboutUs.module.scss";

const AboutUs: FC = () => {
  return (
    <div className={s.container}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={s.content}>
              <h3 className={s.title}>
                Read the full Kart Racing League whitepaper
              </h3>
              <a
                href="https://whitepaper.kartracingleague.com/"
                target="_blank"
                className={`btn-app-default ${s.btnAction}`}
              >
                Read Whitepaper
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className={s.content}>
              <h3 className={s.title}>Review KRL Token contract</h3>
              <a
                href="https://etherscan.io/token/0x034B8b03e6d5B01F0B1cf8B57d1C7f6e2338bCC1"
                target="_blank"
                className={`btn-app-default ${s.btnAction}`}
              >
                Review Contract
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
