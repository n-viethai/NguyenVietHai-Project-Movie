import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Form, Input, DatePicker, InputNumber, Switch } from "antd";
import moment from "moment";
import {
  capNhatPhimUploadAction,
  layThongTinPhimAction,
} from "../../../../redux/actions/QuanLyPhimAction";
import { GROUP_ID } from "../../../../util/setting/config";

const { TextArea } = Input;

function EditFilm(props) {
  const [imgSrc, setImgSrc] = useState(
    "https://www.instandngs4p.eu/wp-content/themes/fox/images/placeholder.jpg"
  );
  const dispatch = useDispatch();
  const { thongTinPhim } = useSelector((state) => state.QuanLyPhimReducer);
  //   console.log({ thongTinPhim });

  useEffect(() => {
    let id = props.match.params.id;
    dispatch(layThongTinPhimAction(id));
  }, [dispatch, props]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: thongTinPhim.maPhim,
      tenPhim: thongTinPhim.tenPhim,
      trailer: thongTinPhim.trailer,
      moTa: thongTinPhim.moTa,
      ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
      dangChieu: thongTinPhim.dangChieu,
      sapChieu: thongTinPhim.sapChieu,
      hot: thongTinPhim.hot,
      danhGia: thongTinPhim.danhGia,
      maNhom: GROUP_ID,
      hinhAnh: null,
    },
    onSubmit: (values) => {
      // Tạo đối tượng formdata
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      // cập nhật phim
      dispatch(capNhatPhimUploadAction(formData));
    },
  });
  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value);
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };
  const handleChangeFile = async (e) => {
    // Lấy file ra từ e
    let file = e.target.files[0];
    if (
      file.type === "image/jpg" ||
      file.type === "image/jpeg" ||
      file.type === "image/png"
    ) {
      // Đem dữ liệu vào formik
      await formik.setFieldValue("hinhAnh", file);
      // Tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        setImgSrc(e.target.result);
      };
    } else {
      alert("File không đúng!");
    }
  };
  return (
    <Fragment>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: "default",
        }}
        size="default"
        style={{ padding: "20px 0" }}
      >
        <h1 className="text-2xl ml-5 mb-8">Chỉnh sửa phim</h1>
        <Form.Item label="Tên phim">
          <Input
            name="tenPhim"
            onChange={formik.handleChange}
            value={formik.values.tenPhim}
          />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            onChange={formik.handleChange}
            value={formik.values.trailer}
          />
        </Form.Item>
        <Form.Item label="Mô tả">
          <TextArea
            className="w-full p-2"
            rows="6"
            name="moTa"
            onChange={formik.handleChange}
            value={formik.values.moTa}
          />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            onChange={handleChangeDatePicker}
            format="DD/MM/YYYY"
            value={moment(formik.values.ngayKhoiChieu)}
          />
        </Form.Item>
        <Form.Item label="Đang chiếu">
          <Switch
            onChange={handleChangeSwitch("dangChieu")}
            checked={formik.values.dangChieu}
          />
        </Form.Item>
        <Form.Item label="Sắp chiếu">
          <Switch
            onChange={handleChangeSwitch("sapChieu")}
            checked={formik.values.sapChieu}
          />
        </Form.Item>
        <Form.Item label="Hot">
          <Switch
            onChange={handleChangeSwitch("hot")}
            checked={formik.values.hot}
          />
        </Form.Item>
        <Form.Item label="Đánh giá">
          <InputNumber
            onChange={handleChangeInputNumber("danhGia")}
            min={1}
            max={10}
            value={formik.values.danhGia}
          />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg, image/jpg"
          />
          <div className="mt-4">
            <img
              src={
                imgSrc ===
                "https://www.instandngs4p.eu/wp-content/themes/fox/images/placeholder.jpg"
                  ? thongTinPhim.hinhAnh
                  : imgSrc
              }
              alt={imgSrc}
              style={{
                width: "200px",
                height: "300px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </Form.Item>
        <Form.Item label="Tác vụ">
          <button
            type="submit"
            className="bg-green-500 p-2 text-white font-semibold hover:bg-green-700 transition-all ease-in-out duration-300"
          >
            CHỈNH SỬA
          </button>
        </Form.Item>
      </Form>
    </Fragment>
  );
}

export default EditFilm;
