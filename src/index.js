import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// antd
import "antd/dist/antd.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import { DOMAIN } from "./util/setting/config";

//Đoạn code để kết nối đến server và luôn lắng nghe sự kiện từ server
import * as signalR from "@aspnet/signalr";

//import đa ngôn ngữ
import "./i18n";

export const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${DOMAIN}/DatVeHub`)
  .configureLogging(signalR.LogLevel.Information)
  .build();



connection
  .start()
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
  })
  .catch((errors) => {
    console.log(errors);
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
