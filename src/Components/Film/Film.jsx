import Item from "antd/lib/list/Item";
import React, { Fragment } from "react";
import imgDefault from "../../assets/img/imgDefault.jpg";

export default function Film(props) {
  const { phim } = props;
  // console.log({ phim });
  return (
    <Fragment>
      <div className="p-4">
        <div className="h-full bg-gray-100 rounded-lg overflow-hidden relative shadow-md">
          <div
            style={{
              backgroundImage: `url(${phim.hinhAnh}), url(${imgDefault})`,
              backgroundPosition: "center",
              backgroundSize: "100% auto",
              backgroundRepeat: "no-repeat, repeat-y",
              height: "400px",
              width: "100%",
            }}
          ></div>
          <div className="p-4">
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3 h-14">
              {phim.tenPhim.length > 50 ? <span>{phim.tenPhim.slice(0,45)} ...</span> : <span>{phim.tenPhim}</span> }
            </h1>
            {/* <p className="leading-relaxed mb-3">{phim.moTa}</p> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
