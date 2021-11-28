import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import MultipleRows from "../../Components/ReactSlick/MultipleRow";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
import { layDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapAction";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
// import { hideLoadingAction } from "../../redux/actions/LoadingAction";
import "./Home.scss";
import { CloseCircleOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import mobileImg from "../../assets/img/mobile.png";

export default function Home(props) {
  // const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { arrFilmDefault } = useSelector((state) => state.QuanLyPhimReducer);
  // console.log(arrFilm);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const { isModal, linkModal } = useSelector((state) => state.HomeModalReducer);
  // console.log(isModal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
    dispatch(layDanhSachHeThongRapAction());
  }, [dispatch]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <HomeCarousel />
      <div className="p-5">
        <div className="max-w-screen-lg mx-auto">
          <section className="text-gray-600">
            <div className="container px-5 py-10 mx-auto">
              <div className="home-films">
                <MultipleRows arrFilm={arrFilmDefault} />
              </div>
            </div>
          </section>
          <div className="hidden lg:block">
            <HomeMenu heThongRapChieu={heThongRapChieu} />
          </div>

          {/* Modal youtube */}
          <div
            className={`home-modal ${
              isModal === true ? "active" : " "
            } fixed top-0 left-0 bottom-0 right-0 h-full w-full bg-black bg-opacity-90 overflow-hidden`}
            style={{ zIndex: "99999" }}
            onClick={() => {
              dispatch({
                type: "SET_HOME_MODAL_OFF",
              });
            }}
          >
            <div
              style={{
                width: "610px",
                height: "410px",
                transform: "translate(-50%, -50%)",
              }}
              className="bg-white flex items-center justify-center absolute top-1/2 left-1/2 rounded"
            >
              <iframe
                width="600"
                height="400"
                src={linkModal}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute" style={{ top: "-47px", left: "612px" }}>
                <button
                  className="text-4xl text-white opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out"
                  onClick={() => {
                    dispatch({
                      type: "SET_HOME_MODAL_OFF",
                    });
                  }}
                >
                  <CloseCircleOutlined />
                </button>
              </div>
            </div>
          </div>
          {/* end modal youtube */}

          {/* Tin tức */}
          <div id="tinTuc">
            <div className="title mt-16">
              <h1>TIN TỨC</h1>
            </div>
            <div className="flex flex-wrap md:flex-nowrap ">
              <div className="w-full sm:w-1/2 p-2">
                <div>
                  <img
                    className="block rounded mb-4"
                    src="https://cdn.tuoitrethudo.com.vn/stores/news_dataimages/ngokhucquanganh/102021/07/13/1054_lat_mat_1.jpg?rt=20211007131114"
                    alt=""
                  />
                  <NavLink className="text-xl text-black" to="/home">
                    Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip
                    Lật Mặt: 48H đậm chất
                  </NavLink>
                  <p className="mt-4">
                    Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip
                    rượt đuổi gay cấn thót tim fans hâm mộ . . .
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <div>
                  <img
                    className="block rounded mb-4"
                    src="https://image.thanhnien.vn/900x600/Uploaded/2021/tnabtw/2021_04_09/01-anhnoibat_nxot.jpg"
                    alt=""
                  />
                  <NavLink className="text-xl text-black" to="/home">
                    [Mortal Kombat : Cuộc chiến sinh tử] - Gọi tên những phim
                    điện ảnh nổi tiếng được chuyển thể từ các tựa game đình đám
                  </NavLink>
                  <p className="mt-4">
                    Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood
                    cũng không thiếu những tác phẩm đình đám được chuyển thể từ
                    tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi
                    điện tử.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end tin tức */}
        </div>
        {/* Ứng dụng */}
      </div>
      <div
        className="relative mt-10 hidden lg:block"
        style={{
          height: "600px",
          backgroundImage:
            "url(https://tix.vn/app/assets/img/icons/backapp.jpg)",
          // backgroundRepeat: "no-repeat",
          // backgroundSize:"cover",
          // backgroundPosition:"center"
        }}
      >
        <div
          className="mx-auto absolute flex justify-center items-center"
          style={{
            width: "900px",
            // height: "100px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-1/2 relative overflow-hidden">
            <h1 className="text-white text-3xl mb-0">
              Ứng dụng tiện lợi dành cho người yêu điện ảnh
            </h1>
            <p className="text-white text-base my-10">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <span className="bg-red-500 p-3 text-xl text-white rounded-md font-semibold inline-block">
              App miễn phí - Tải về ngay!
            </span>
            <p className="mt-8 text-white mb-0">
              Có hai phiên bản cho
              <a
                className="text-white mx-2 font-semibold underline"
                target="_blank"
                rel="noreferrer"
                href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
              >
                IOS
              </a>
              &
              <a
                className="text-white mx-2 font-semibold underline"
                target="_blank"
                rel="noreferrer"
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
              >
                Android
              </a>
            </p>
          </div>
          <div className="w-1/2">
            <div
              style={{
                width: "212px",
                height: "424px",
                right: "120px",
                top: "-13px",
                border: "12px solid #000",
                zIndex: "1",
                borderRadius: "30px",
              }}
              className="absolute"
            ></div>
            <div
              style={{
                right: "128px",
                top: "-9px",
              }}
              className="absolute z-10"
            >
              <img
                src={mobileImg}
                alt="..."
                // style={{ width: "100%", padding: "0 28%" }}
                style={{
                  width: "196px",
                  height: "417px",
                }}
                // className="absolute z-10"
              />
            </div>
            <div
              className=" overflow-hidden"
              style={{ width: "195px", marginLeft: "128px" }}
            >
              <Slider {...settings}>
                <div>
                  <img
                    src="https://tix.vn/app/assets/img/icons/slide/slide1.jpg"
                    alt="..."
                    style={{ width: "193px", height: "398px" }}
                    className="rounded-2xl"
                  />
                </div>
                <div>
                  <img
                    src="https://tix.vn/app/assets/img/icons/slide/slide9.jpg"
                    className="rounded-2xl"
                    style={{ width: "193px", height: "400px" }}
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="https://tix.vn/app/assets/img/icons/slide/slide8.jpg"
                    className="rounded-2xl"
                    style={{ width: "193px", height: "400px" }}
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="https://tix.vn/app/assets/img/icons/slide/slide7.jpg"
                    className="rounded-2xl"
                    style={{ width: "193px", height: "400px" }}
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="https://tix.vn/app/assets/img/icons/slide/slide5.jpg"
                    className="rounded-2xl"
                    style={{ width: "193px", height: "400px" }}
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="https://tix.vn/app/assets/img/icons/slide/slide6.jpg"
                    className="rounded-2xl"
                    style={{ width: "193px", height: "400px" }}
                    alt="..."
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* end Ứng dụng */}
    </div>
  );
}
