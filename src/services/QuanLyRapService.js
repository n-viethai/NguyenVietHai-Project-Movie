import { GROUP_ID } from "../util/setting/config";
import { baseService } from "./baseService";

class QuanLyRapService extends baseService {
  // constructor() {
  //   super();
  // }
  LayDanhSachHeThongRap = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`
    );
  };

  layThongTinLichChieuPhim = (maPhim) => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  };

  layThongTinHeThongRap = () => {
    return this.get("/api/QuanLyRap/LayThongTinHeThongRap");
  };

  layThongTinCumRap = (maHeThongRap) => {
    return this.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
  }
}

const QLRapService = new QuanLyRapService();
export const { LayDanhSachHeThongRap } = QLRapService;
export const { layThongTinLichChieuPhim } = QLRapService;
export const { layThongTinHeThongRap } = QLRapService;
export const { layThongTinCumRap } = QLRapService;
