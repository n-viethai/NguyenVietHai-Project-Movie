import { baseService } from "./baseService";

class QuanLyNguoiDungService extends baseService {
  dangNhap = (thongTinDangNhap) => {
    //taiKhoan, matKhau
    return this.post("/api/QuanLyNguoiDung/DangNhap", thongTinDangNhap);
  };
  layThongTinNguoiDung = () => {
    return this.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
  };
  dangKy = (thongTinNguoiDung) => {
    return this.post("/api/QuanLyNguoiDung/DangKy", thongTinNguoiDung);
  };
}
const QLNguoiDung = new QuanLyNguoiDungService();
export const { dangNhap } = QLNguoiDung;
export const { layThongTinNguoiDung } = QLNguoiDung;
export const { dangKy } =QLNguoiDung; 
