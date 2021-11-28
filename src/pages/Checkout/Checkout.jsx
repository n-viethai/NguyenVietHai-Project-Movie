import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import {
  datGheAction,
  datVeAction,
  layChiTietPhongVeAction,
  setGheDangDuocTatCaClientDatAction,
} from "../../redux/actions/QuanLyDatVeAction";
import "./checkout.css";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { Tabs } from "antd";
import { layThongTinNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";
import moment from "moment";
import { connection } from "../../index";
import { history } from "../../App";
import { UserOutlined } from "@ant-design/icons";
function Checkout(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { chiTietPhongVe, danhSachGheDangDat, danhSachGheDangCoNguoiDat } =
    useSelector((state) => state.QuanLyDatVeReducer);
  console.log({ chiTietPhongVe });
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layChiTietPhongVeAction(props.match.params.id));

    // có 1 client nào thực hiện đặt vé thành công mình sẽ load lại danh sách phòng vé của lịch chiếu đó
    connection.on("datVeThanhCong", () => {
      dispatch(layChiTietPhongVeAction(props.match.params.id));
    });

    //vừa vào trang load tất cả ghế của các người khác đang đặt
    connection.invoke("loadDanhSachGhe", props.match.params.id);

    // lấy danh sách ghế đang đặt từ server về (lắng nghe từ server)
    connection.on("loadDanhSachGheDaDat", (dsGheDangDuocDat) => {
      // console.log("danh sach ghe dang duoc dat", dsGheDangDuocDat);
      // B1 : loại mình ra khỏi danh sách
      dsGheDangDuocDat = dsGheDangDuocDat.filter(
        (item) => item.taiKhoan !== userLogin.taiKhoan
      );
      // B2 : gộp danh sách ghế người khác đặt thành 1 mảng chung
      let arrGheDangDuocDat = dsGheDangDuocDat.reduce((result, item, index) => {
        let arrGhe = JSON.parse(item.danhSachGhe);
        return [...result, ...arrGhe];
      }, []);
      arrGheDangDuocDat = _.uniqBy(arrGheDangDuocDat, "maGhe");
      // console.log({arrGheDangDuocDat});
      //đưa dữ liệu ghế đang được client đặt lên redux
      dispatch(setGheDangDuocTatCaClientDatAction(arrGheDangDuocDat));

      //cài đặt sự kiện khi load lại trang
      window.addEventListener("beforeunload", clearGhe);

      return () => {
        clearGhe();
        window.removeEventListener("beforeunload", clearGhe);
      };
    });
  }, [dispatch]);

  const clearGhe = () => {
    connection.invoke("huyDat", userLogin.taiKhoan, props.match.params.id);
  };

  const renderGhe = () => {
    const danhSachGheNew = _.chunk(danhSachGhe, 16);
    return danhSachGheNew.map((hangGhe, index) => {
      return (
        <div key={index} className="flex">
          {hangGhe.map((ghe, index) => {
            let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
            let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
            let classGheDangChon = "";
            //kiểm tra xem ghế render có đang được chọn hay không
            let gheDangChon = danhSachGheDangDat.find(
              (item) => item.maGhe === ghe.maGhe
            );
            if (gheDangChon) {
              classGheDangChon = "gheDangChon";
            }

            // kiểm tra xem ghế render xem có người khác đang chọn hay không
            let classGheDangCoNguoiDat = "";
            let gheDangCoNguoiDat = danhSachGheDangCoNguoiDat.find(
              (item) => item.maGhe === ghe.maGhe
            );
            if (gheDangCoNguoiDat) {
              classGheDangCoNguoiDat = "gheDangDuocNguoiKhacDat";
            }
            return (
              <div
                className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangChon} ${classGheDangCoNguoiDat}`}
                key={index}
                onClick={() => {
                  dispatch(datGheAction(ghe, props.match.params.id));
                }}
              >
                {ghe.tenGhe}
              </div>
            );
          })}
        </div>
      );
    });
  };
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex">
        <div className="w-3/4">
          <div className="flex flex-col items-center mt-8 relative">
            <div className=" w-3/5 h-3 bg-black"></div>
            <div
              className="w-3/5"
              style={{
                borderBottom: "50px solid rgba(0, 0, 0, 0.02",
                borderLeft: "50px solid transparent",
                borderRight: "50px solid transparent",
                filter: "drop-shadow(0px 10px 10px #000)",
              }}
            ></div>
            <div className="text-base absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Màn hình
            </div>
          </div>
          <div className="flex flex-col items-center mt-8">{renderGhe()}</div>
          <div className="flex justify-center flex-wrap mt-8">
            <div className="px-8">
              <div className="flex items-center py-2">
                <div className="ghe gheDangChon"></div>
                Ghế đang đặt
              </div>
              <div className="flex items-center py-2">
                <div className="ghe gheDaDat"></div>
                Ghế đã được đặt
              </div>
            </div>
            <div className="px-8">
              <div className="flex items-center py-2">
                <div className="ghe gheVip"></div>
                Ghế VIP
              </div>
              <div className="flex items-center py-2">
                <div className="ghe"></div>
                Ghế thường
              </div>
            </div>
            <div className="px-8">
              <div className="flex items-center py-2">
                <div className="ghe gheDangDuocNguoiKhacDat"></div>
                Ghế đang có người đặt
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-1/4 h-full pt-4 flex flex-col justify-between"
          style={{ boxShadow: "-8px 0px 8px 1px rgba(0, 0, 0, 0.08)" }}
        >
          <div className="px-4">
            <h1 className="text-green-500 text-2xl text-center">
              {danhSachGheDangDat
                .reduce((tongTien, item, index) => {
                  tongTien = tongTien + item.giaVe;
                  return tongTien;
                }, 0)
                .toLocaleString()}{" "}
              VNĐ
            </h1>
            <div className="w-full border-b border-gray-200"></div>
            <div className="py-2">
              <h1 className="text-xl font-semibold">
                <span className="bg-red-500 text-white p-1 rounded mr-2 text-sm">
                  C
                  {_.random(13, 18) < 16
                    ? 13
                    : _.random(13, 18) === 16
                    ? 16
                    : 18}
                </span>
                {thongTinPhim?.tenPhim}
              </h1>
              <p className="mb-2 font-semibold">{thongTinPhim.diaChi}</p>
              <p className="mb-0 font-semibold">
                {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} -{" "}
                {thongTinPhim.tenRap}
              </p>
            </div>
            <div className="w-full border-b border-gray-200"></div>
            <div className="flex justify-between py-2">
              <div className="mb-0 font-semibold text-red-500">
                Ghế
                <div className="grid grid-cols-6 mb-0">
                  {_.sortBy(danhSachGheDangDat, ["maGhe"]).map((ghe, index) => {
                    return (
                      <p
                        className="mr-2 text-green-500 mb-1 text-center"
                        key={index}
                      >
                        {ghe.tenGhe}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-full border-b border-gray-200"></div>
            <div className="py-2">
              <p className="mb-2 text-gray-400">Email</p>
              <p className="font-semibold mb-0">{userLogin.email}</p>
            </div>
            <div className="w-full border-b border-gray-200"></div>
            <div className="py-2">
              <p className="text-gray-400 mb-2">Điện thoại</p>
              <p className="mb-0 font-semibold">{userLogin.soDT}</p>
            </div>
            <div className="w-full border-b border-gray-200"></div>
            <div className="py-2 flex justify-between items-center md:flex-wrap">
              <div>
                <p className="text-gray-400 mb-2">Mã giảm giá</p>
                <input
                  className="font-semibold placeholder-black py-2 border-0 outline-none mb-0"
                  type="text"
                  placeholder="Nhập tại đây ..."
                />
              </div>
              <div className="px-3 md:mt-3 text-white bg-red-500 rounded flex items-center h-10 font-semibold cursor-pointer hover:bg-red-700 transition-all ease-in-out duration-500">
                Áp dụng
              </div>
            </div>
            <div className="w-full border-b border-gray-200"></div>
            <p className="py-2 mb-0 font-semibold">Hình thức thanh toán</p>
          </div>
          <div className="fl">
            <p className="text-center font-semibold">
              <span className="text-red-500 font-bold mr-2 text-xl">!</span>
              Vé đã mua không thể đổi hoặc hoàn tiền
            </p>
            <div
              className="bg-green-500 mt-10 text-center text-white p-3 font-semibold text-xl hover:bg-green-700 transition-all duration-500 ease-in-out cursor-pointer"
              onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = props.match.params.id;
                thongTinDatVe.danhSachVe = danhSachGheDangDat;
                dispatch(datVeAction(thongTinDatVe));
              }}
            >
              Đặt vé
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KetQuaDatVe(props) {
  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  console.log({ thongTinNguoiDung });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layThongTinNguoiDungAction());
  }, [dispatch]);

  const renderTicketItem = () => {
    return _.reverse(thongTinNguoiDung.thongTinDatVe).map((ticket, index) => {
      const seat = _.first(ticket.danhSachGhe);
      return (
        <div className="bg-black mt-8 border" key={index}>
          <div
            className="w-full h-2 overflow-hidden"
            style={{
              background:
                "url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-top-seatmap.png) repeat-x top left transparent",
            }}
          ></div>
          <div className="py-3 px-5 flex">
            <div>
              <img
                src={ticket.hinhAnh}
                alt={ticket.hinhAnh}
                style={{ width: "120px", height: "160px" }}
                className="rounded"
              />
            </div>
            <div className="ml-4 text-white" style={{ width: "350px" }}>
              <p className="text-base font-semibold">{ticket.tenPhim}</p>
              <p>2D</p>
              <p>Thời lượng phim : {ticket.thoiLuongPhim} phút</p>
              <p>Ngày đặt : {moment(ticket.ngayDat).format("DD/MM/YYYY")}</p>
            </div>
            <div className="text-white ml-8">
              <p className="text-base text-black font-semibold select-none">
                Nguyễn Viết Hải
              </p>
              <p>Rạp : {seat.tenHeThongRap}</p>
              <p>Phòng chiếu : {seat.tenRap} </p>
              <p>
                Ghế :{" "}
                {ticket.danhSachGhe.map((item, index) => {
                  return (
                    <span
                      className="ml-2 p-1 text-black rounded bg-white"
                      key={index}
                    >
                      {item.tenGhe}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
          <div
            className="w-full h-2 overflow-hidden"
            style={{
              background:
                "url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-bottom-seatmap.png) repeat-x bottom left transparent",
            }}
          ></div>
        </div>
      );
    });
  };
  return (
    <div className="max-w-screen-lg mx-auto  border border-gray-200">
      <h1 className="text-center text-2xl">DANH SÁCH VÉ ĐÃ ĐẶT</h1>
      {renderTicketItem()}
    </div>
  );
}

const { TabPane } = Tabs;

export default function (props) {
  const { tabActive } = useSelector((state) => state.QuanLyDatVeReducer);
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const operations = (
    <div className="flex items-center">
      <div className="mr-2 bg-black w-8 h-8 text-white rounded-full text-center text-xl font-semibold flex items-center justify-center">
        <UserOutlined />
      </div>
      {!_.isEmpty(userLogin) ? (
        <button
        className="text-base font-semibold"
          onClickCapture={() => {
            history.push("/profile");
          }}
        >
          {userLogin.taiKhoan}
        </button>
      ) : (
        ""
      )}
    </div>
  );
  return (
    <div className="checkout px-10 xl:max-w-screen-xl lg:max-w-screen-lg max-w-screen-xl mx-auto min-h-screen" >
      <Tabs
        tabBarExtraContent={operations}
        defaultActiveKey="1"
        activeKey={tabActive.toString()}
        onChange={(key) => {
          dispatch({
            type: "CHUYEN_TAB_ACTIVE",
            tabKey: key,
          });
        }}
      >
        <TabPane tab="01 CHỌN GHẾ VÀ THANH TOÁN" key="1">
          <Checkout {...props} />
        </TabPane>
        <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
          <KetQuaDatVe {...props} />
        </TabPane>
      </Tabs>
    </div>
  );
}
// export default Checkout;
