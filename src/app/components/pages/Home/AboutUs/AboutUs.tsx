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
                href="https://polygonscan.com/token/0xc17b109e146934d36c33e55fade9cbda791b0366"
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
