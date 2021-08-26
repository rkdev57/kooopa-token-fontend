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
                Read the full Kooopa Racing League whitepape
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
              <h3 className={s.title}>Review KOO Token contract</h3>
              <a className={`btn-app-default ${s.btnAction}`}>
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
