import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import MultipleRows from "../../Components/ReactSlick/MultipleRow";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
import { layDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapAction";

export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  // console.log(arrFilm);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
    dispatch(layDanhSachHeThongRapAction());
  }, []);
  return (
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
  );
}
