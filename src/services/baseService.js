import axios from "axios";
import { ACCESS_TOKEN, DOMAIN, TokenCybersoft } from "../util/setting/config";

export class baseService {
  put = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "PUT",
      data: model,
      headers: {
        TokenCybersoft: TokenCybersoft,
        Authorization:"Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    });
  };

  post = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "POST",
      data: model,
      headers: {
        TokenCybersoft: TokenCybersoft,
        Authorization:
          "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    });
  };

  get = (url) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "GET",
      headers: {
        TokenCybersoft: TokenCybersoft,
        Authorization:"Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    });
  };

  delete = (url) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "DELETE",
      headers: {
        TokenCybersoft: TokenCybersoft,
        Authorization:"Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    });
  };
}
