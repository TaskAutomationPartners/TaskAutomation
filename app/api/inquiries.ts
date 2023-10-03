import { baseUrl } from "./api";

export const Inquiry = {
  submitInquiry: (inquiry: any) => {
    return fetch(baseUrl + "/Inquiry", {
      method: "POST",
      body: inquiry.json(),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
