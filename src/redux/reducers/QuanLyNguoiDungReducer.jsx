import { ACCESS_TOKEN, USER_LOGIN } from "../../util/setting/config";
import { DANG_NHAP_ACTION } from "../types/QuanLyNguoiDungType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(
        ACCESS_TOKEN,
        JSON.stringify(thongTinDangNhap.accessToken)
      );
      state.userLogin = thongTinDangNhap;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
