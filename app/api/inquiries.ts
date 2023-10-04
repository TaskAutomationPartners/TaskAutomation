import { requests } from "./api";

export const Inquiry = {
  submitInquiry: (inquiry: any) => requests.post("Inquiry", inquiry),
};
