import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "antd";
import { getCarouselAction } from "../../../../redux/actions/CarouselAction";

export default function HomeCarousel(props) {
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  // const { headerHeight } = useSelector((state) => state.HeaderReducer);
  const dispatch = useDispatch();

  /**
   cách truyền thống
  useEffect(async () => {
    try {
      let result = await axios({
        url: "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
        method: "GET",
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOEUiLCJIZXRIYW5TdHJpbmciOiIyOC8wMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDYwMDY0MDAwMDAiLCJuYmYiOjE2MTY1MTg4MDAsImV4cCI6MTY0NjE1NDAwMH0.Aojk9-Qo5B5whL6jc8aZ4IOCm1RF9MrUhORXCrWBwEA",
        },
      });
      // console.log("result", result.data.content);
      dispatch({
        type: "SET_CAROUSEL",
        arrImg: result.data.content,
      });
    } catch (error) {
      console.log({ error });
    }
  }, []);
 */

  useEffect(() => {
    dispatch(getCarouselAction());
  }, []);

  const contentStyle = {
    height: "100vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    // background: "#364d79",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };
  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{
              ...contentStyle,
              backgroundImage: `url(${item.hinhAnh})`,
            }}
          >
            <img
              src={item.hinhAnh}
              alt={item.hinhAnh}
              className="w-full opacity-0"
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Carousel effect="fade" autoplay>
        {renderImg()}
      </Carousel>
    </div>
  );
}
