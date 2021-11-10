import { GROUP_ID } from "../util/setting/config";
import { baseService } from "./baseService";

class QuanLyPhimService extends baseService {
  // constructor() {
  //   super();
  // }
  layDanhSachBanner = () => {
    return this.get("/api/QuanLyPhim/LayDanhSachBanner");
  };

  layDanhSachPhim = (tenPhim = "") => {
    if(tenPhim !== ""){
      return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${tenPhim}`)
    }
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  };

  themPhimUploadHinh = (formData) => {
    return this.post("/api/QuanLyPhim/ThemPhimUploadHinh", formData);
  };

  layThongTinPhim = (maPhim) => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };

  capNhatPhimUpload = (formData) => {
    return this.post("/api/QuanLyPhim/CapNhatPhimUpload", formData);
  };
  xoaPhim = (maPhim) => {
    return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };
}

const QLPhimService = new QuanLyPhimService();
export const { layDanhSachBanner } = QLPhimService;
export const { layDanhSachPhim } = QLPhimService;
export const { themPhimUploadHinh } = QLPhimService;
export const { layThongTinPhim } = QLPhimService;
export const { capNhatPhimUpload } = QLPhimService;
export const { xoaPhim } = QLPhimService;
