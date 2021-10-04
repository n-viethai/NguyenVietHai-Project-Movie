import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../assets/styles/circleRating.css";
import { Tabs, Rate } from "antd";
import { layThongTinChiTietPhimAction } from "../../redux/actions/QuanLyRapAction";
import moment from "moment";
import { name } from "react-lorem-ipsum";
import _ from "lodash";
import { NavLink } from "react-router-dom";
const { TabPane } = Tabs;

export default function Detail(props) {
  const cricleRatingRef = useRef(null);
  const { filmDetail } = useSelector((state) => state.QuanLyPhimReducer);
  // console.log({ filmDetail });
  const dispatch = useDispatch();
  useEffect(() => {
    let ratingColor = "";
    if (filmDetail.danhGia * 10 < 40) {
      ratingColor = "#e74c3c";
    } else if (filmDetail.danhGia * 10 >= 40 && filmDetail.danhGia * 10 < 60) {
      ratingColor = "#f1c40f";
    } else {
      ratingColor = "#7ed321";
    }
    const gradient = `background: conic-gradient(${ratingColor} ${
      filmDetail.danhGia * 10
    }%, transparent 0 100%)`;
    cricleRatingRef.current.setAttribute("style", gradient);
    cricleRatingRef.current.innerHTML = `<span>${
      filmDetail.danhGia ? filmDetail.danhGia : 0
    }</span>`;
  });
  useEffect(() => {
    // lấy thông tin param từ url
    let { id } = props.match.params;
    dispatch(layThongTinChiTietPhimAction(id));
  }, [dispatch]);

  return (
    <div>
      <div className="relative w-full flex justify-center overflow-hidden py-28">
        <div
          className="absolute top-0 left-0 w-full bg-opacity-60 bg-black h-full"
          style={{ zIndex: "-1" }}
        ></div>
        <div
          className="overflow-hidden absolute top-0 left-0 w-full"
          style={{
            filter: "blur(20px)",
            transform: "scale(1.03)",
            zIndex: "-2",
          }}
        >
          <img
            src={filmDetail.hinhAnh}
            alt="..."
            className="w-full object-cover"
          />
        </div>
        <div style={{ width: "900px" }}>
          <div className="flex items-center justify-between">
            <div className="w-2/3 flex items-center">
              <img
                src={filmDetail.hinhAnh}
                className="rounded-lg shadow"
                style={{ width: "250px", height: "350px" }}
                alt="..."
              />
              <div className="text-white p-4">
                <p className="text-base mb-6">
                  {moment(filmDetail.ngayKhoiChieu).format("DD/MM/YYYY")}
                </p>
                <p className="text-2xl">
                  <span className="px-2 py-1 mr-4 bg-red-500 rounded mb-0">
                    {_.random(13, 18) < 16
                      ? 13
                      : _.random(13, 18) === 16
                      ? 16
                      : 18}
                  </span>
                  <span className="mb-0">{filmDetail.tenPhim}</span>
                </p>
                <div className="text-base font-medium">
                  <p>{_.random(100, 150)} phút</p>
                  <p>{_.round(_.random(6, 10, true), 1)} IMDb - 2D/Digitals</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center pl-40 w-1/3">
              <div className="rating" ref={cricleRatingRef}></div>
              <div className="my-3">
                <Rate allowHalf value={filmDetail.danhGia / 2} />
              </div>
              <p className="text-white text-base">
                {_.random(50, 500)} người đánh giá
              </p>
            </div>
          </div>
          <Tabs defaultActiveKey="2" centered>
            <TabPane
              tab={
                <p className="mx-8 text-center mt-16 text-xl text-white transform hover:scale-125 transition-all duration-300 ease-in-out">
                  Lịch chiếu
                </p>
              }
              key="1"
            >
              <div className="my-10">
                <Tabs tabPosition="left" className="bg-white rounded">
                  {filmDetail.heThongRapChieu?.map((htr, index) => {
                    return (
                      <TabPane
                        tab={
                          <div className="flex items-center">
                            <img
                              style={{ width: "50px" }}
                              src={htr.logo}
                              alt={htr.logo}
                            />
                            <span className="mx-4">{htr.maHeThongRap}</span>
                          </div>
                        }
                        key={index}
                      >
                        <div>
                          {htr.cumRapChieu?.map((rap, index) => {
                            return (
                              <div className="border-b border-gray-200 mt-2 mb-8" key={index}>
                                <div className="flex">
                                  <div>
                                    <img
                                      className="rounded block"
                                      src={rap.hinhAnh}
                                      alt={rap.hinhAnh}
                                      style={{ width: "50px" }}
                                    />
                                  </div>
                                  <div className="text-left ml-4 whitespace-pre-wrap w-40 flex-1">
                                    <p className="mb-1 text-lg">
                                      {_.replace(
                                        rap.tenCumRap,
                                        "BHD Star Cineplex",
                                        "BHD"
                                      )}
                                    </p>
                                    <span className="text-sm">
                                      {rap.diaChi}
                                    </span>
                                    <div className="grid grid-cols-4 mt-3">
                                      {_.slice(rap.lichChieuPhim, 0, 6).map(
                                        (lichChieu, index) => {
                                          return (
                                            <NavLink
                                              to={`/checkout/${lichChieu.maLichChieu}`}
                                              className="text-lg my-3"
                                              key={index}
                                            >
                                              {moment(
                                                lichChieu.ngayChieuGioChieu
                                              ).format("hh:mm A")}
                                            </NavLink>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </TabPane>
                    );
                  })}
                </Tabs>
              </div>
            </TabPane>
            <TabPane
              tab={
                <p className="mx-8 text-center mt-16 text-xl text-white transform hover:scale-125 transition-all duration-300 ease-in-out">
                  Thông tin
                </p>
              }
              key="2"
            >
              <div className="mt-10 flex text-white text-base">
                <div className="w-1/5">
                  <p>Ngày khởi chiếu</p>
                  <p>Đạo diễn</p>
                  <p>Diễn viên</p>
                  <p>Thể loại</p>
                  <p>Định dạng</p>
                  <p>Quốc gia sản xuất</p>
                </div>
                <div className="w-1/5">
                  <p>{moment(filmDetail.ngayKhoiChieu).format("DD/MM/YYYY")}</p>
                  <p>{name("male")}</p>
                  <p>
                    {name("male")}, {name("female")}, {name("female")}
                  </p>
                  <p>Hành động</p>
                  <p>2D/Digitals</p>
                  <p>Mỹ</p>
                </div>
                <div className="w-3/5 pl-24">
                  <p>Nội dung</p>
                  <p className="text-justify">{filmDetail.moTa}</p>
                </div>
              </div>
            </TabPane>
            <TabPane
              tab={
                <p className="mx-8 text-center mt-16 text-xl text-white transform hover:scale-125 transition-all duration-300 ease-in-out">
                  Đánh giá
                </p>
              }
              key="3"
            >
              <p className="text-white text-xl">Chưa có đánh giá</p>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
