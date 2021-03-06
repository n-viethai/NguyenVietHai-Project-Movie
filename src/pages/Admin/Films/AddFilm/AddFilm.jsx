import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Form, Input, DatePicker, InputNumber, Switch } from "antd";
import moment from "moment";
import { themPhimUploadHinhAction } from "../../../../redux/actions/QuanLyPhimAction";
import { GROUP_ID } from "../../../../util/setting/config";
const { TextArea } = Input;

function AddFilm(props) {
  const [imgSrc, setImgSrc] = useState(
    "https://www.instandngs4p.eu/wp-content/themes/fox/images/placeholder.jpg"
  );
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    onSubmit: (values) => {
      // console.log({ values });
      values.maNhom = GROUP_ID;
      // Tạo đối tượng formdata
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }

      //  gọi API đưa formdata về backend
      dispatch(themPhimUploadHinhAction(formData));
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
    let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };
  const handleChangeFile = (e) => {
    // Lấy file ra từ e
    let file = e.target.files[0];
    if (
      file.type === "image/jpg" ||
      file.type === "image/jpeg" ||
      file.type === "image/png"
    ) {
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
    // Đem dữ liệu vào formik
    formik.setFieldValue("hinhAnh", file);
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
        <h1 className="text-2xl ml-5 mb-8">Thêm phim mới</h1>
        <Form.Item label="Tên phim">
          <Input name="tenPhim" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Mô tả">
          <TextArea className="w-full p-2" rows="6" name="moTa" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
        </Form.Item>
        <Form.Item label="Đang chiếu">
          <Switch onChange={handleChangeSwitch("dangChieu")} />
        </Form.Item>
        <Form.Item label="Sắp chiếu">
          <Switch onChange={handleChangeSwitch("sapChieu")} />
        </Form.Item>
        <Form.Item label="Hot">
          <Switch onChange={handleChangeSwitch("hot")} />
        </Form.Item>
        <Form.Item label="Đánh giá">
          <InputNumber
            onChange={handleChangeInputNumber("danhGia")}
            min={1}
            max={10}
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
              src={imgSrc}
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
            THÊM PHIM
          </button>
        </Form.Item>
      </Form>
    </Fragment>
  );
}

export default AddFilm;
