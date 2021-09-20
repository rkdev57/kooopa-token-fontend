import axios, { AxiosResponse } from "axios";
// import AppConfig from "../../config";

const postInvestment = (data: any): Promise<AxiosResponse> => {
  return axios.post(`https://krlauction.herokuapp.com/mint`, data);
};

export const investmentService = {
  postInvestment,
};
export default investmentService;
