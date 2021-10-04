import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import { baseService } from "./baseService";

class QuanLyDatVeService extends baseService {
  // constructor() {
  //   super();
  // }
  layChiTietPhongVe = (maLichChieu) => {
    //mã lịch chiếu lấy từ URL
    return this.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };
  datVe = (thongTinDatVe = new ThongTinDatVe()) => {
    return this.post("/api/QuanLyDatVe/DatVe", thongTinDatVe);
  };
}

const QLDatVeService = new QuanLyDatVeService();
export const { layChiTietPhongVe } = QLDatVeService;
export const { datVe } = QLDatVeService;
