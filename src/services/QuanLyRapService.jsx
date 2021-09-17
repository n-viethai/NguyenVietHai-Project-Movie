import { GROUP_ID } from "../util/setting/config";
import { baseService } from "./baseService";

class QuanLyRapService extends baseService {
  constructor() {
    super();
  }
  LayDanhSachHeThongRap = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`
    );
  };
}

const QLRapService = new QuanLyRapService();
export const { LayDanhSachHeThongRap } = QLRapService;
