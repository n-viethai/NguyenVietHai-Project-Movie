import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "antd";

export default function HomeCarousel(props) {
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  // const { headerHeight } = useSelector((state) => state.HeaderReducer);
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
            <img src={item.hinhAnh} alt={item.hinhAnh} className="w-full opacity-0" />
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
