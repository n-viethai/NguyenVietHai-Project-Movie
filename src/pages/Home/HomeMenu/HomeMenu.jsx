import React, { memo } from "react";
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";
const { TabPane } = Tabs;

function HomeMenu(props) {
  const { heThongRapChieu } = props;
  const renderHeThongRap = () => {
    return heThongRapChieu?.map((heThongRap, index) => {
      return (
        <TabPane
          key={index}
          tab={
            <img
              src={heThongRap.logo}
              className="rounded-full"
              width="50"
              alt={heThongRap.logo}
            ></img>
          }
        >
          <Tabs tabPosition="left" size="large">
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  key={index}
                  tab={
                    <div className="flex items-center">
                      <div>
                        <img
                          src="https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-phu-tho-15383865322515.jpg"
                          width="50"
                          className="rounded"
                          alt="..."
                        ></img>
                      </div>
                      <div className="ml-3 text-sm text-left">
                        <p>
                          {cumRap.tenCumRap.replace("BHD Star Cineplex", "BHD")}
                        </p>
                        <p className="text-xs">
                          {cumRap.diaChi.length > 30 ? (
                            <span>{cumRap.diaChi.slice(0, 20)} . . .</span>
                          ) : (
                            <span>{cumRap.diaChi}</span>
                          )}
                        </p>
                      </div>
                    </div>
                  }
                >
                  {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                    return (
                      <div className="p-4 border-b border-gray-300" key={index}>
                        <div className="flex">
                          <div>
                            <img
                              src={phim.hinhAnh}
                              alt={phim.tenPhim}
                              style={{
                                width: "60px",
                                height: "80px",
                              }}
                              className="object-cover object-center rounded block"
                            />
                          </div>
                          <div className="ml-4">
                            <h1 className="text-2xl font-medium">
                              {phim.tenPhim}
                            </h1>
                            <div className="grid grid-cols-6 gap-5">
                              {phim.lstLichChieuTheoPhim
                                ?.slice(0, 10)
                                .map((lichChieu, index) => {
                                  return (
                                    <NavLink
                                      to={`/checkout/${lichChieu.maLichChieu}`}
                                      className="text-xl text-green-600"
                                      key={index}
                                    >
                                      {moment(
                                        lichChieu.ngayChieuGioChieu
                                      ).format("hh:mm A")}
                                    </NavLink>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <div>
      <Tabs tabPosition="left" size="large">
        {renderHeThongRap()}
      </Tabs>
    </div>
  );
}

export default memo(HomeMenu);
