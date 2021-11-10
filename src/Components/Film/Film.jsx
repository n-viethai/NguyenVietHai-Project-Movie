import React, { Fragment } from "react";
// import { NavLink } from "react-router-dom";
// import imgDefault from "../../assets/img/imgDefault.jpg";
import { useDispatch } from "react-redux";
import "./Film.scss";
import { PlayCircleOutlined } from "@ant-design/icons";
import { history } from "../../App";

export default function Film(props) {
  const { phim } = props;
  // console.log(phim);
  const dispatch = useDispatch();
  // console.log({ phim });
  return (
    <Fragment>
      <div className="px-1 py-3">
        <div className="phim-item h-full bg-gray-100 rounded-lg overflow-hidden relative shadow-md">
          <div>
            <img
              src={phim.hinhAnh}
              alt={phim.hinhAnh}
              className="object-cover object-center"
              style={{ width: "100%", height: "360px" }}
            />
          </div>
          <div
            className="phim-bg absolute top-0 bg-black bg-opacity-80 transition-all duration-700 ease-in-out"
            style={{
              left: "-200px",
              transform: "skewX(45deg)",
              width: "0",
              height: "100%",
            }}
          ></div>
          <div
            style={{ transition: "all 1s ease-in-out" }}
            className="phim-icon opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white text-center"
          >
            <div
              className=" opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out"
              onClick={() => {
                dispatch({
                  type: "SET_HOME_MODAL_ON",
                  linkModal: phim.trailer,
                });
              }}
            >
              <PlayCircleOutlined style={{ fontSize: "50px" }} />
            </div>
            <button
              className="rounded mt-8 font-semibold text-base bg-red-500 px-3 py-2 hover:bg-red-700 transition-all duration-300 ease-in-out"
              style={{ letterSpacing: "2px" }}
              onClick={() => {
                history.push(`/detail/${phim.maPhim}`);
              }}
            >
              MUA VÉ
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
