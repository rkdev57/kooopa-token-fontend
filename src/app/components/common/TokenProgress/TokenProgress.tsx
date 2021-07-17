import { notification } from "antd";
import { FC, useState } from "react";
import { Widget, PopupButton } from "@typeform/embed-react/build/index";
import { useUI } from "../../../contexts/AppContext";
import s from "./TokenProgress.module.scss";
import Modal from "antd/lib/modal/Modal";

const TokenProgress: FC = () => {
  const { wallet } = useUI();
  const [popupActive, setPopupActive] = useState(false);

  const startProcess = () => {
    if (!wallet || wallet.length === 0) {
      notification.error({ message: "Please connect your wallet!" });
      return;
    }
    setPopupActive(true);
  };

  const TypeFormComponent = () => {
    return (
      <Modal
        visible={true}
        onCancel={() => setPopupActive(false)}
        footer={null}
        wrapClassName="typeform-popup"
      >
        <Widget id="C9AgcxOG" className="typeform" />
      </Modal>
    );
  };

  return (
    <div className={s.sectionWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className={s.content}>
              <span className={`d-block ${s.header}`}>
                Kooopa Token (KOO) Public Sale Phase 1
              </span>
              <p>Individual Cap 0.5 ETH = 5,000,000 KOO</p>

              <button
                className={`btn-app-default ${s.buyNow}`}
                onClick={() => startProcess()}
              >
                Start now
              </button>
              {popupActive && TypeFormComponent()}

              <p>1 KOO = 0.0000001 ETH</p>
              <p>1 ETH = 10,000,000 KOO</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className={s.progressContainer}>
              <div className={s.dataWrapper}>
                <div className={s.data}>
                  <span className={s.label}>TOTAL AMOUNT</span>
                  <span className={s.label}>250,000,000 $KOO</span>
                </div>
                <div className={s.data}>
                  <span className={s.label}>CLOSES IN</span>
                  <span className={s.value}>Starting soon</span>
                </div>

                <div className={s.progressBarContainer}>
                  <span className={s.label}>0/250,000,000</span>
                  <span className={s.progressBar}>
                    <span className={s.bar} style={{ width: "60%" }}></span>
                    <div
                      className={s.caps}
                      data-label="60% Soft Cap"
                      style={{ width: "60%" }}
                    ></div>
                    <div
                      className={s.caps}
                      data-label="90% Hoft Cap"
                      style={{ width: "90%" }}
                    ></div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenProgress;
