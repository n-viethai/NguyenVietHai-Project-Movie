import { LayDanhSachHeThongRap } from "../../services/QuanLyRapService";
import { layThongTinLichChieuPhim } from "../../services/QuanLyRapService";
import {
  SET_HE_THONG_RAP_CHIEU,
  SET_CHI_TIET_PHIM,
} from "../types/QuanLyRapType";

export const layDanhSachHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await LayDanhSachHeThongRap();
      dispatch({
        type: SET_HE_THONG_RAP_CHIEU,
        heThongRapChieu: result.data.content,
      });
    } catch (error) {
      console.log({ error });
    }
  };
};

export const layThongTinChiTietPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await layThongTinLichChieuPhim(maPhim);
      dispatch({
        type: SET_CHI_TIET_PHIM,
        filmDetail: result.data.content,
      });
    } catch (error) {
      console.log({ error });
    }
  };
};
