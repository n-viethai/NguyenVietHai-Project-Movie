import { GROUP_ID } from "../util/setting/config";
import { baseService } from "./baseService";

class QuanLyPhimService extends baseService {
  // constructor() {
  //   super();
  // }
  layDanhSachBanner = () => {
    return this.get("/api/QuanLyPhim/LayDanhSachBanner");
  };

  layDanhSachPhim = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  };
}

const QLPhimService = new QuanLyPhimService();
export const { layDanhSachBanner } = QLPhimService;
export const { layDanhSachPhim } = QLPhimService;
