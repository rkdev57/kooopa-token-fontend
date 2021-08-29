import { isDecimalDigit } from "../../../utility/Validator";

export const FormRule = {
  depositAmount: [
    { required: true, message: "Enter amount" },
    () => ({
      validator(_rule: any, value: any) {
        if ((isDecimalDigit(value) && value < 0.05) || value > 1.5) {
          return Promise.reject(
            "Amount should be Min: 0.05 ETH and Max: 1.5 ETH"
          );
        }

        return Promise.resolve();
      },
    }),
  ],
  cashDepositAmount: [
    { required: true, message: "Enter amount" },
    () => ({
      validator(_rule: any, value: any) {
        if ((isDecimalDigit(value) && value < 50) || value > 2000) {
          return Promise.reject(
            "Amount should be Min: 50 USD and Max: 2000 USD"
          );
        }

        return Promise.resolve();
      },
    }),
  ],
};
