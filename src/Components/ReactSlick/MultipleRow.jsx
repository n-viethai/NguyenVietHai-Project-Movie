import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import Film from "../Film/Film";
import "./MultipleRow.css";
import {
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../../redux/types/QuanLyPhimType";

export default function MultipleRow(props) {
  const dispatch = useDispatch();
  const { arrFilm } = props;
  const [activeDangChieu, setActiveDangChieu] = useState(true);
  const [activeSapChieu, setActiveSapChieu] = useState(false);
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
    rows: 1,
    slidesPerRow: 2,
  };

  const renderFilm = () => {
    return arrFilm.map((item, index) => {
      return (
        <Fragment key={index}>
          <Film phim={item} />
        </Fragment>
      );
    });
  };
  return (
    <div>
      <div className="p-4">
        <button
          className={`px-8 py-3 border-2 rounded border-gray-500 font-bold hover:bg-gray-500 hover:text-white transition-all duration-500 ease-in-out ${
            activeDangChieu === true ? "active-film" : ""
          }`}
          onClick={() => {
            dispatch({
              type: SET_PHIM_DANG_CHIEU,
            });
            setActiveDangChieu(true);
            setActiveSapChieu(false);
          }}
        >
          PHIM ĐANG CHIẾU
        </button>
        <button
          className={`mx-4 px-8 py-3 border-2 rounded border-gray-500 font-bold hover:bg-gray-500 hover:text-white transition-all duration-500 ease-in-out ${
            activeSapChieu === true ? "active-film" : ""
          }`}
          onClick={() => {
            dispatch({
              type: SET_PHIM_SAP_CHIEU,
            });
            setActiveDangChieu(false);
            setActiveSapChieu(true);
          }}
        >
          PHIM SẮP CHIẾU
        </button>
      </div>
      <Slider {...settings}>{renderFilm()}</Slider>
    </div>
  );
}
