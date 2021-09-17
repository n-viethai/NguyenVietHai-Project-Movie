import { LayDanhSachHeThongRap } from "../../services/QuanLyRapService";
import { SET_HE_THONG_RAP_CHIEU } from "../types/QuanLyRapType";

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
