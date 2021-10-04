import { ACCESS_TOKEN, USER_LOGIN } from "../../util/setting/config";
import { ThongTinNguoiDung } from "../../_core/models/ThongTinNguoiDung";
import {
  DANG_NHAP_ACTION,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../types/QuanLyNguoiDungType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  thongTinNguoiDung: new ThongTinNguoiDung(),
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(ACCESS_TOKEN, thongTinDangNhap.accessToken);
      state.userLogin = thongTinDangNhap;
      return { ...state };
    }
    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
