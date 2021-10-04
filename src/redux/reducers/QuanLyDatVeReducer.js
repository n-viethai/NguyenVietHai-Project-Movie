import {
  CHUYEN_TAB,
  DAT_VE,
  DAT_VE_HOAN_TAT,
  SET_CHI_TIET_PHONG_VE,
  SET_GHE_DANG_DUOC_CLIENT_DAT,
} from "../types/QuanLyDatVeType";
import { ThongTinPhongVe } from "../../_core/models/ThongTinPhongVe";

const stateDefault = {
  chiTietPhongVe: new ThongTinPhongVe(),
  danhSachGheDangDat: [],
  tabActive: 1,
  danhSachGheDangCoNguoiDat: [],
};

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CHI_TIET_PHONG_VE: {
      state.chiTietPhongVe = action.chiTietPhongVe;
      return { ...state };
    }
    case DAT_VE: {
      // cập nhật danh sách ghế đang đặt
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];
      let ghe = danhSachGheCapNhat.find(
        (item) => item.maGhe === action.gheDangChon.maGhe
      );
      if (ghe) {
        danhSachGheCapNhat = danhSachGheCapNhat.filter(
          (item) => item.maGhe !== ghe.maGhe
        );
      } else {
        danhSachGheCapNhat.push(action.gheDangChon);
      }
      state.danhSachGheDangDat = danhSachGheCapNhat;
      return { ...state };
    }
    case DAT_VE_HOAN_TAT: {
      state.danhSachGheDangDat = [];
      return { ...state };
    }
    case CHUYEN_TAB: {
      state.tabActive = 2;
      return { ...state };
    }
    case "CHUYEN_TAB_ACTIVE": {
      state.tabActive = action.tabKey;
      return { ...state };
    }
    case SET_GHE_DANG_DUOC_CLIENT_DAT: {
      state.danhSachGheDangCoNguoiDat = action.danhSachGheDangCoNguoiDat;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
