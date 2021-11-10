import React, { Fragment, useState } from "react";
import Slider from "react-slick";
import Film from "../Film/Film";
import "./MultipleRow.scss";


export default function MultipleRow(props) {
  const { arrFilm } = props;
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
    rows: 1,
    slidesPerRow: 1,
  };

  const renderFilmDangChieu = () => {
    let arrFilmDangChieu = arrFilm.filter((item) => item.dangChieu === true);
    return arrFilmDangChieu.map((item, index) => {
      return (
        <Fragment key={index}>
          <Film phim={item} />
        </Fragment>
      );
    });
  };
  const renderFilmSapChieu = () => {
    let arrFilmSapChieu = arrFilm.filter((item) => item.sapChieu === true);
    return arrFilmSapChieu.map((item, index) => {
      return (
        <Fragment key={index}>
          <Film phim={item} />
        </Fragment>
      );
    });
  };
  return (
    <div>
      <div className="title mt-10">
        <h1>PHIM ĐANG CHIẾU</h1>
      </div>
      <Slider {...settings}>{renderFilmDangChieu()}</Slider>
      <div>
        <div className="title mt-16">
          <h1>PHIM SẮP CHIẾU</h1>
        </div>
        <Slider {...settings}>{renderFilmSapChieu()}</Slider>
      </div>
    </div>
  );
}
