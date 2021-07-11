import { FC } from "react";
import s from "./Intro.module.scss";

const Intro: FC = () => {
  return (
    <div className={s.sectionWrapper}>
      <div className="container">
        <span className={`d-block default-text`}>
          Steps to participate in token sale:
        </span>
        <ol>
          <li>Connect wallet</li>
          <li>Click Start now</li>
          <li>Complete the form</li>
          <li>Follow steps to process deposit</li>
        </ol>

        <div className={s.content}>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              {/* <span className={s.heading}>TIERS OF</span> */}
              <img src="/images/TIERS-OF-COOOPA.png" alt="" />
            </div>
            <div className="col-md-6">
              <p className="default-text">
                Koopa Tiers From the beginning we set out to make the Kooopa
                public sale as fair as possible, giving participants at each
                phase an equal shot at a discounted fair price. Depending on
                when the FOMO kicks in for you, we’ve created four sale phases,
                each with a different offering to suit you. As the phases go on
                the discounted price will increase, all before settling at our
                DEX listing price.
              </p>
              <div className="text-center">
                <a
                  href="https://kooopa.medium.com/kooopa-super-trooper-recruitment-902c7825a3cb"
                  target="_blank"
                  className={`btn-app-default ${s.btnAction}`}
                >
                  BECOME A TROOPA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
