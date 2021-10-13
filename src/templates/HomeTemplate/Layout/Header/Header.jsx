import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import { Select } from "antd";
import { useSelector } from "react-redux";

// hook đa ngôn ngữ
import { useTranslation } from "react-i18next";
import { UserOutlined } from "@ant-design/icons";
import _ from "lodash";
import { ACCESS_TOKEN, USER_LOGIN } from "../../../../util/setting/config";
const { Option } = Select;

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { t, i18n } = useTranslation();
  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            className="self-center px-8 py-3 rounded text-white"
            onClick={() => {
              history.push("/login");
            }}
          >
            {t("Sign in")}
          </button>
          <button
            className="self-center px-8 py-3 font-semibold rounded text-white"
            onClick={() => {
              history.push("/register");
            }}
          >
            {t("Sign up")}
          </button>
        </Fragment>
      );
    } else {
      return (
        <div className="flex items-center">
          <div className="mr-2 rounded-full bg-white w-8 h-8 text-black font-semibold flex items-center justify-center">
            <UserOutlined />
          </div>
          <button
            className="self-center rounded text-white mr-4 font-semibold  "
            onClick={() => {
              history.push("/profile");
            }}
          >
            {userLogin.taiKhoan}
          </button>
          <button
            className="mx-4 text-white font-semibold"
            onClick={() => {
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(ACCESS_TOKEN);
              window.location.reload();
            }}
          >
            {t("Log out")}
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <header className="p-4 bg-opacity-40 bg-black fixed top-0 w-full z-50">
        <div className="container flex justify-between mx-auto h-10">
          <NavLink
            to="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
              alt="..."
            />
          </NavLink>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink
                to="/home"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white hover:text-red-500"
                activeClassName="border-b-2 border-red-500"
              >
                {t("Home")}
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/contact"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white hover:text-red-500"
                activeClassName="border-b-2 border-red-500"
              >
                {t("Contact")}
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/news"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white hover:text-red-500"
                activeClassName="border-b-2 border-red-500"
              >
                {t("News")}
              </NavLink>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            {renderLogin()}
            <Select
              defaultValue="en"
              style={{ width: 140 }}
              onChange={handleChange}
            >
              <Option value="en">
                <div className="flex items-center">
                  <img
                    src="http://3e.com.vn/vnt_upload/lang/lang-en.png"
                    alt="English"
                    style={{ width: "25px", height: "18px" }}
                    className="mr-2 rounded"
                  />{" "}
                  <span>English</span>
                </div>
              </Option>
              <Option value="vi">
                <div className="flex items-center">
                  <img
                    src="http://3e.com.vn/vnt_upload/lang/lang-vn.png"
                    alt="VietNamese"
                    style={{ width: "25px", height: "18px" }}
                    className="mr-2 rounded"
                  />{" "}
                  <span>Việt Nam</span>
                </div>
              </Option>
            </Select>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-coolGray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
