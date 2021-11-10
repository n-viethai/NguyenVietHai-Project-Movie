import { history } from "../../App";
import {
  layDanhSachPhim,
  layThongTinPhim,
  themPhimUploadHinh,
  capNhatPhimUpload,
  xoaPhim,
} from "../../services/QuanLyPhimService";
import {
  SET_DANH_SACH_PHIM,
  SET_THONG_TIN_PHIM,
} from "../types/QuanLyPhimType";

export const layDanhSachPhimAction = (tenPhim = "") => {
  return async (dispatch) => {
    try {
      const result = await layDanhSachPhim(tenPhim);
      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrFilm: result.data.content,
      });
    } catch (error) {
      console.log({ error });
    }
  };
};

export const themPhimUploadHinhAction = (formData) => {
  return async (dispatch) => {
    try {
      const result = await themPhimUploadHinh(formData);
      console.log(result);
      alert("Thêm phim thành công!");
    } catch (error) {
      console.log({ error });
    }
  };
};

export const capNhatPhimUploadAction = (formData) => {
  return async (dispatch) => {
    try {
      const result = await capNhatPhimUpload(formData);
      console.log(result);
      alert("Cập nhật phim thành công!");
      dispatch(layDanhSachPhimAction());
      history.push("/admin/film");
    } catch (error) {
      console.log({ error });
    }
  };
};

export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await layThongTinPhim(maPhim);
      dispatch({
        type: SET_THONG_TIN_PHIM,
        thongTinPhim: result.data.content,
      });
    } catch (error) {
      console.log({ error });
    }
  };
};

export const xoaPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await xoaPhim(maPhim);
      console.log(result.data.content);
      await dispatch(layDanhSachPhimAction());
      setTimeout(() => {
        alert("Xóa phim thành công!");
      }, 500);
      // sau khi xóa load lại danh sách phim
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};
