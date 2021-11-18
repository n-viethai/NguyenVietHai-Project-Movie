import React from "react";
import { useDispatch } from "react-redux";
import "./Register.scss";
import { useFormik } from "formik";
import { dangKyAction } from "../../redux/actions/QuanLyNguoiDungAction";

export default function Register() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      hoTen: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(dangKyAction(values));
    },
  });
  return (
    <div
      className="w-screen h-screen relative"
      style={{
        backgroundImage: "url(https://tix.vn/app/assets/img/icons/bg2.jpg)",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute p-10 bg-white rounded-2xl shadow-xl"
        style={{
          //   maxWidth: "400px",
          width: "400px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          //   backgroundImage:"linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))"
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="..."
          />
        </div>
        <div className="mt-10">
          <p className="mb-10 text-xl font-semibold">Đăng ký</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="py-2 px-2 rounded border border-gray-400 relative">
              <div
                className="absolute px-3  text-base z-10 bg-white text-black"
                style={{ top: "-14px", left: "10px" }}
              >
                Họ tên
              </div>
              <input
                type="text"
                name="hoTen"
                className="w-full outline-none border-0 px-2 bg-transparent text-black"
                style={{ height: "30px" }}
                onChange={formik.handleChange}
              />
            </div>
            <div className="py-2 px-2 rounded border border-gray-400 relative mt-5">
              <div
                className="absolute px-3  text-base z-10 bg-white text-black"
                style={{ top: "-14px", left: "10px" }}
              >
                Tài khoản
              </div>
              <input
                type="text"
                name="taiKhoan"
                className="w-full outline-none border-0 px-2 bg-transparent text-black"
                style={{ height: "30px" }}
                onChange={formik.handleChange}
              />
            </div>
            <div className="py-2 px-2 rounded border border-gray-400 relative mt-5">
              <div
                className="absolute px-3  text-base z-10 bg-white text-black"
                style={{ top: "-14px", left: "10px" }}
              >
                Mật khẩu
              </div>
              <input
                type="password"
                name="matKhau"
                className="w-full outline-none border-0 px-2 bg-transparent text-black"
                style={{ height: "30px" }}
                onChange={formik.handleChange}
              />
            </div>
            <div className="py-2 px-2 rounded border border-gray-400 relative mt-5">
              <div
                className="absolute px-3  text-base z-10 bg-white text-black"
                style={{ top: "-14px", left: "10px" }}
              >
                Email
              </div>
              <input
                type="text"
                name="email"
                className="w-full outline-none border-0 px-2 bg-transparent text-black"
                style={{ height: "30px" }}
                onChange={formik.handleChange}
              />
            </div>
            <div className="py-2 px-2 rounded border border-gray-400 relative mt-5">
              <div
                className="absolute px-3  text-base z-10 bg-white text-black"
                style={{ top: "-14px", left: "10px" }}
              >
                Số điện thoại
              </div>
              <input
                type="text"
                name="soDt"
                className="w-full outline-none border-0 px-2 bg-transparent text-black"
                style={{ height: "30px" }}
                onChange={formik.handleChange}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="mt-5 bg-green-500 py-3 px-10 text-base text-white shadow-xl hover:bg-green-700 transition-all duration-300 ease-in-out"
              >
                Đăng ký
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
