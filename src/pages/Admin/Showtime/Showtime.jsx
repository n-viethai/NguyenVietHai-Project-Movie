import React, { Fragment, useState, useEffect } from "react";
import { Form, Select, DatePicker, InputNumber, Button } from "antd";
import { useFormik } from "formik";
import {
  layThongTinCumRap,
  layThongTinHeThongRap,
} from "../../../services/QuanLyRapService";
import moment from "moment";
import { taoLichChieu } from "../../../services/QuanLyDatVeService";
function Showtime(props) {
  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  });
  // console.log("hệ thống rạp chiếu", state.heThongRapChieu);

  const formik = useFormik({
    initialValues: {
      maPhim: props.match.params.id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: async (values) => {
      // console.log(values);
      try {
        const result = await taoLichChieu(values);
        console.log(result.data.content);
        alert("Tạo lịch chiếu thành công!")
      } catch (error) {
        console.log(error.response?.data);
      }
    },
  });
  useEffect(async () => {
    try {
      let result = await layThongTinHeThongRap();
      setState({
        ...state,
        heThongRapChieu: result.data.content,
      });
    } catch (errors) {
      console.log(errors.respon.data);
    }
  }, []);
  const handleChangeHeThongRap = async (values) => {
    // console.log(values);
    // từ hệ thống rạp call API lấy ra thông tin rạp
    let result = await layThongTinCumRap(values);
    console.log(result.data.content);
    setState({
      ...state,
      cumRapChieu: result.data.content,
    });
    try {
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
  const handleChangeCumRap = (value) => {
    formik.setFieldValue("maRap", value);
  };
  const onOk = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
  };
  const handleChangeDatePicker = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
  };
  const handleChangeInputNumber = (value) => {
    formik.setFieldValue("giaVe", value);
  };
  const convertSelectHTR = () => {
    return state.heThongRapChieu?.map((htr, index) => ({
      label: htr.tenHeThongRap,
      value: htr.maHeThongRap,
      key: index,
    }));
  };

  const convertSelectCumRap = () => {
    return state.cumRapChieu?.map((cumRap, index) => ({
      label: cumRap.tenCumRap,
      value: cumRap.maCumRap,
      key: index,
    }));
  };
  return (
    <Fragment>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{
          size: "default",
        }}
        size="default"
        style={{ padding: "20px 0" }}
        onSubmitCapture={formik.handleSubmit}
      >
        <h1 className="text-2xl ml-5 mb-8">Tạo lịch chiếu</h1>
        <Form.Item label="Hệ thống rạp">
          <Select
            options={convertSelectHTR()}
            onChange={handleChangeHeThongRap}
            placeholder="Please select"
          />
        </Form.Item>
        <Form.Item label="Cụm rạp">
          <Select
            options={convertSelectCumRap()}
            onChange={handleChangeCumRap}
            placeholder="Please select"
          />
        </Form.Item>
        <Form.Item label="Ngày chiếu giờ chiếu">
          <DatePicker
            format="DD/MM/YYYY hh:mm:ss"
            showTime
            onChange={handleChangeDatePicker}
            onOk={onOk}
          />
        </Form.Item>
        <Form.Item label="Giá vé">
          <InputNumber onChange={handleChangeInputNumber} />
        </Form.Item>
        <Form.Item label="Giá vé">
          <Button htmlType="submit" type="primary">
            TẠO LỊCH CHIẾU
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
}

export default Showtime;
