import { FC } from "react";
import s from "./Intro.module.scss";

const Intro: FC = () => {
  return (
    <div className={s.sectionWrapper}>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <span className={`d-block default-text`}>
              Steps to participate in token sale with crypto:
            </span>
            <ol>
              <li>Connect wallet via Metamask or WalletConnect</li>
              <li>Click Start now</li>
              <li>Complete the form</li>
              <li>Enter investment amount in ETH</li>
              <li>Follow steps to process deposit</li>
              <li>
                Your ETH has now been successfully deposited to our TGE{" "}
                <a href="#">contract</a> and your $KOO tokens will be
                distributed to your ERC-20 wallet at the end of phase 3 of our
                sale.
              </li>
            </ol>
          </div>
          <div className="col-md-6">
            <span className={`d-block default-text`}>
              Steps to participate in token sale with credit/debit card:
            </span>
            <ol>
              <li>Click on connect wallet and select credit/debit card</li>
              <li>Click Start now</li>
              <li>Complete the form</li>
              <li>Enter investment amount in USD</li>
              <li>Follow steps to process deposit</li>
              <li>
                Complete USDT purchase using your preferred payment method {"&"}
                seller
              </li>
              <li>Wait for email confirmation of your USDT purchase</li>
              <li>
                Your USDT purchase has now been successfully deposited to our{" "}
                TGE {""}
                <a href="#">wallet</a> and your $KOO tokens will be distributed
                to your nominated ERC-20 wallet at the end of phase 3 of our
                sale.
              </li>
            </ol>
          </div>
        </div>

        <div className={s.content}>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              {/* <span className={s.heading}>TIERS OF</span> */}
              <img src="/images/TIERS-OF-COOOPA.png" alt="" />
            </div>
            <div className="col-md-6">
              <p className="default-text">
                Kooopa Tiers From the beginning we set out to make the Kooopa
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
