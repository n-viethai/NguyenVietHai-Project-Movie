import { dangNhap } from "../../services/QuanLyNguoiDungService";
import { DANG_NHAP_ACTION } from "../types/QuanLyNguoiDungType";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await dangNhap(thongTinDangNhap);
      dispatch({
        type: DANG_NHAP_ACTION,
        thongTinDangNhap: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
