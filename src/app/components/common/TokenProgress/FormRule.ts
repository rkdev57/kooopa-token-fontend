import { isDecimalDigit } from "../../../utility/Validator";

export const FormRule = {
  depositAmount: [
    { required: true, message: "Enter amount" },
    () => ({
      validator(_rule: any, value: any) {
        if ((isDecimalDigit(value) && value < 0.01) || value > 0.5) {
          return Promise.reject(
            "Amount should be Min: 0.01 ETH and Max: 0.5 ETH"
          );
        }

        return Promise.resolve();
      },
    }),
  ],
};
