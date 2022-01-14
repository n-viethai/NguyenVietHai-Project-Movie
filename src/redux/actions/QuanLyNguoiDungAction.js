import {
  dangKy,
  dangNhap,
  layThongTinNguoiDung,
} from "../../services/QuanLyNguoiDungService";
import {
  DANG_NHAP_ACTION,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../types/QuanLyNguoiDungType";
import { history } from "../../App";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await dangNhap(thongTinDangNhap);
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
        history.push("/home");
      }
    } catch (error) {
      console.log(error.response.data);
      alert(`${error.response.data.message}`);
    }
  };
};

export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await layThongTinNguoiDung();
      dispatch({
        type: SET_THONG_TIN_NGUOI_DUNG,
        thongTinNguoiDung: result.data.content,
      });
    } catch (error) {
      console.log({ error });
    }
  };
};

export const dangKyAction = (thongTinNguoiDung) => {
  return async (dispatch) => {
    try {
      const result = await dangKy(thongTinNguoiDung);
      console.log(result);
      alert("Đăng ký thành công!");
      history.push("/login");
    } catch (error) {
      console.log({ error });
    }
  };
};