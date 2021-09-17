import {
  SET_DANH_SACH_PHIM,
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../types/QuanLyPhimType";

const stateDefault = {
  arrFilm: [
    // {
    //   maPhim: 4956,
    //   tenPhim: "Wanted",
    //   biDanh: "wanted",
    //   trailer: "https://www.youtube.com/watch?v=edpEspHOeVU",
    //   hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/wanted_gp01.jpg",
    //   moTa: "Wanted is a 2008 American action thriller film directed by Timur Bekmambetov and written by Michael Brandt, Derek Haas, and Chris Morgan, loosely based on the comic book miniseries by Mark Millar and J. G. Jones. The film stars James McAvoy, Morgan Freeman, Terence Stamp, Thomas Kretschmann, Common, and Angelina Jolie.nn",
    //   maNhom: "GP01",
    //   ngayKhoiChieu: "2021-09-27T00:00:00",
    //   danhGia: 10,
    //   hot: true,
    //   dangChieu: true,
    //   sapChieu: true,
    // },
  ],
  arrFilmDefault: [],
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilmDefault = action.arrFilm;
      state.arrFilm = state.arrFilmDefault.filter(
        (item) => item.dangChieu === true
      );
      return { ...state };
    }
    case SET_PHIM_DANG_CHIEU: {
      state.arrFilm = state.arrFilmDefault.filter(
        (item) => item.dangChieu === true
      );
      return { ...state };
    }
    case SET_PHIM_SAP_CHIEU: {
      state.arrFilm = state.arrFilmDefault.filter(
        (item) => item.sapChieu === true
      );
      return { ...state };
    }
    default:
      return { ...state };
  }
};
