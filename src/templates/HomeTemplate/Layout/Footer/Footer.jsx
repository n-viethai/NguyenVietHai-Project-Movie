import React from "react";
import { SendOutlined } from "@ant-design/icons";

export default function Footer(props) {
  return (
    <footer
      className="bg-black bg-opacity-90"
      style={{ width: "100%" }}
      id="contact"
    >
      <div className="flex flex-row mx-auto max-w-screen-xl px-5 py-20">
        <div className="w-1/4">
          <div>
            <img
              src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
              alt="..."
            />
          </div>
        </div>
        <div className="w-1/4">
          <p className="text-white text-base">ĐỐI TÁC</p>
          <div className="flex">
            <div>
              <a
                href="https://www.cgv.vn/"
                target="_blank"
                rel="noreferrer"
                className="bg-white"
              >
                <img
                  src="https://tix.vn/app/assets/img/icons/cgv.png"
                  alt="..."
                  className="w-full bg-white rounded-full"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
            <div className="mx-3">
              <a
                href="https://www.bhdstar.vn/en/"
                target="_blank"
                rel="noreferrer"
                className="bg-white"
              >
                <img
                  src="https://tix.vn/app/assets/img/icons/bhd.png"
                  alt="..."
                  className="w-full bg-white rounded-full"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
            <div className="mr-3">
              <a
                href="https://www.galaxycine.vn/"
                target="_blank"
                rel="noreferrer"
                className="bg-white"
              >
                <img
                  src="https://tix.vn/app/assets/img/icons/galaxycine.png"
                  alt="..."
                  className="w-full bg-white rounded-full"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
            <div>
              <a
                href="https://cinestar.com.vn/"
                target="_blank"
                rel="noreferrer"
                className="bg-white"
              >
                <img
                  src="https://tix.vn/app/assets/img/icons/cinestar.png"
                  alt="..."
                  className="w-full bg-white rounded-full"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
          </div>
          <div className="flex mt-3">
            <div>
              <a
                href="https://www.lottecinemavn.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white"
              >
                <img
                  src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"
                  alt="..."
                  className="w-full bg-white rounded-full"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
            <div className="mx-3">
              <a
                href="https://www.megagscinemas.vn/"
                target="_blank"
                rel="noreferrer"
                className="bg-white"
              >
                <img
                  src="https://tix.vn/app/assets/img/icons/megags.png"
                  alt="..."
                  className="w-full bg-white rounded-full"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
            <div className="mr-3">
              <a
                href="https://www.betacinemas.vn/home.htm"
                target="_blank"
                rel="noreferrer"
                className="bg-white"
              >
                <img
                  src="https://tix.vn/app/assets/img/icons/bt.jpg"
                  alt="..."
                  className="w-full bg-white rounded-full"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
            <div>
              <a
                href="http://ddcinema.vn/"
                target="_blank"
                rel="noreferrer"
                className="bg-white"
              >
                <img
                  src="https://tix.vn/app/assets/img/icons/dongdacinema.png"
                  alt="..."
                  className="w-full bg-white rounded-full"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <p className="text-white text-base">LIÊN HỆ</p>
          <div className="">
            <div className="mt-5">
              <a
                href="https://www.facebook.com/viethai.1309/"
                target="_blank"
                rel="noreferrer"
                className="text-white text-2xl"
              >
                <i className="fa-brands fa-facebook-square"></i>
                <span className="text-sm ml-3">facebook.com/viethai.1309/</span>

              </a>
            </div>
            <div className="mt-3">
              <a
                href="mailto:viethai1309@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-white text-2xl"
              >
                <i className="fa-solid fa-envelope"></i>
                <span className="text-sm ml-3">viethai1309@gmail.com</span>
              </a>
            </div>
            <div className="mt-3">
              <a
                href="tel:+84976283273"
                target="_blank"
                rel="noreferrer"
                className="text-white text-2xl"
              >
                <i className="fa-solid fa-mobile-screen-button"></i>
                <span className="text-sm ml-3">0976 283 273</span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <p className="text-white text-base">ĐĂNG KÝ</p>
          <p className="text-white">Đăng ký để nhận thông tin khuyến mãi</p>
          <div className="flex rounded-xl overflow-hidden border border-white">
            <input
              autoComplete="off"
              type="email"
              placeholder="Email"
              className="text-white p-2 text-base bg-transparent border-none"
              style={{ flex: "1", outline: "none" }}
            />
            <button className="text-2xl text-white px-5 py-3 flex justify-center items-center">
              <SendOutlined />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
