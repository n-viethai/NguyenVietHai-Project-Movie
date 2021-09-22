import React, { useEffect, Fragment } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import MultipleRows from "../../Components/ReactSlick/MultipleRow";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
import { layDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapAction";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";

export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  // console.log(arrFilm);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
    dispatch(layDanhSachHeThongRapAction());
  }, [dispatch]);
  return (
    <Fragment>
      <HomeCarousel />
      <div className="2xl:max-w-screen-xl mx-auto">
        <section className="text-gray-600">
          <div className="container px-5 py-10 mx-auto">
            <div className="home-films">
              <MultipleRows arrFilm={arrFilm} />
            </div>
          </div>
        </section>
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
    </Fragment>
  );
}
