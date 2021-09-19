import axios, { AxiosResponse } from "axios";
// import AppConfig from "../../config";

const postInvestment = (data: any): Promise<AxiosResponse> => {
  return axios.post(`https://jsonplaceholder.typicode.com/posts`, data);
};

export const investmentService = {
  postInvestment,
};
export default investmentService;
