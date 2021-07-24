import { FC } from "react";
import OnramperWidget from "@onramper/widget";
import Modal from "antd/lib/modal/Modal";
import config from "../../../../../config";

interface Props {
  amount: number;
  onClose: any;
}

const CashWallet: FC<Props> = ({ amount, onClose }) => {
  const onramperConfig = {
    defaultAmount: amount,
    color: "#16324b",
    ...config.onRamper,
  };

  return (
    <div>
      <Modal
        visible={true}
        onCancel={() => onClose()}
        footer={null}
        className="deposit-popup show-close-button"
      >
        <div className="ramper-widget">
          <OnramperWidget className="ramper-widget-item" {...onramperConfig} />
        </div>
      </Modal>
    </div>
  );
};

export default CashWallet;
