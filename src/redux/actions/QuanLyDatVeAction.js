import { connection } from "../../index";
import { datVe, layChiTietPhongVe } from "../../services/QuanLyDatVeService";
import {
  CHUYEN_TAB,
  DAT_VE_HOAN_TAT,
  SET_CHI_TIET_PHONG_VE,
  DAT_VE,
  SET_GHE_DANG_DUOC_CLIENT_DAT,
} from "../types/QuanLyDatVeType";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await layChiTietPhongVe(maLichChieu);
      dispatch({
        type: SET_CHI_TIET_PHONG_VE,
        chiTietPhongVe: result.data.content,
      });
    } catch (error) {
      console.log({ error });
    }
  };
};

export const datVeAction = (thongTinDatVe) => {
  return async (dispatch, getState) => {
    const taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan;
    try {
      dispatch(displayLoadingAction);
      const result = await datVe(thongTinDatVe);

      //Đặt vé thành công gọi API load lại phòng vé
      await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));
      await dispatch({ type: DAT_VE_HOAN_TAT });
      connection.invoke("datGheThanhCong", taiKhoan, thongTinDatVe.maLichChieu);
      await dispatch({ type: CHUYEN_TAB });
      // console.log(result.data);
      setTimeout(() => {
        dispatch(hideLoadingAction);
      }, 500);
    } catch (error) {
      dispatch(hideLoadingAction);
      console.log(error.response);
    }
  };
};

export const datGheAction = (ghe, maLichChieu) => {
  return async (dispatch, getState) => {
    //đưa thông tin ghế lên reducer
    await dispatch({
      type: DAT_VE,
      gheDangChon: ghe,
    });

    //call API về backend
    let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat;
    //biến mảng thành chuỗi
    danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);
    let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan;

    //call API của signalR

    connection.invoke("datGhe", taiKhoan, danhSachGheDangDat, maLichChieu);
  };
};

export const setGheDangDuocTatCaClientDatAction = (arrGhe) => {
  return async (dispatch) => {
    await dispatch({
      type: SET_GHE_DANG_DUOC_CLIENT_DAT,
      danhSachGheDangCoNguoiDat: arrGhe,
    });
  };
};
