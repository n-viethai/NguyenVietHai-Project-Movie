import { baseService } from "./baseService";

class QuanLyNguoiDungService extends baseService {
  dangNhap = (thongTinDangNhap) => {
    //taiKhoan, matKhau
    return this.post("/api/QuanLyNguoiDung/DangNhap", thongTinDangNhap);
  };
  layThongTinNguoiDung = () => {
    return this.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
  };
}
const QLNguoiDung = new QuanLyNguoiDungService();
export const { dangNhap } = QLNguoiDung;
export const { layThongTinNguoiDung } = QLNguoiDung;
