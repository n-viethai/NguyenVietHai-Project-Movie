import {
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
        history.goBack();
      }
    } catch (error) {
      console.log(error);
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
