import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Breadcrumb, Input, Table } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";
import {
  layDanhSachPhimAction,
  xoaPhimAction,
} from "../../../redux/actions/QuanLyPhimAction";
import { NavLink } from "react-router-dom";
import { history } from "../../../App";
const { Content } = Layout;
const { Search } = Input;
function AdminFilm(props) {
  const { arrFilmDefault } = useSelector((state) => state.QuanLyPhimReducer);
  // console.log({ arrFilmDefault });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, [dispatch]);
  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      width: "10%",
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "descend",
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      width: "25%",
      render: (text, film) => {
        return (
          <Fragment>
            <span>{film.tenPhim.toUpperCase()}</span>
          </Fragment>
        );
      },
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      width: "35%",
      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 200 ? (
              <span>{film.moTa.substr(0, 200)}...</span>
            ) : (
              <span>{film.moTa}</span>
            )}
          </Fragment>
        );
      },
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      with: "15%",
      render: (text, film) => {
        return (
          <Fragment>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              style={{ width: "60px", height: "100px" }}
            />
          </Fragment>
        );
      },
    },
    {
      title: "",
      dataIndex: "hinhAnh",
      with: "15%",
      render: (text, film) => {
        return (
          <Fragment>
            <NavLink to={`/admin/film/editfilm/${film.maPhim}`} key={1}>
              <EditOutlined
                style={{ fontSize: "24px", color: "blue", marginRight: "20px" }}
              />
            </NavLink>
            <NavLink to={`/admin/film/showtime/${film.maPhim}/${film.tenPhim}`} key={1}>
              <CalendarOutlined
                style={{
                  fontSize: "24px",
                  color: "green",
                  marginRight: "20px",
                }}
              />
            </NavLink>
            <span
              key={2}
              className=" cursor-pointer"
              onClick={() => {
                // gọi action xóa phim
                if (
                  window.confirm(
                    "Bạn có chắc muốn xóa phim " + film.tenPhim + " không?"
                  )
                ) {
                  dispatch(xoaPhimAction(film.maPhim));
                }
              }}
            >
              <DeleteOutlined style={{ fontSize: "24px", color: "red" }} />
            </span>
          </Fragment>
        );
      },
    },
  ];

  const data = arrFilmDefault;
  const onSearch = (value) => {
    //  Gọi API lấy danh sách phim
    dispatch(layDanhSachPhimAction(value));
  };

  return (
    <Fragment>
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Admin/Film</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: "100%" }}
        >
          {/* <NavLink to="/admin/film/addfilm">
            <Button className="mb-5">Thêm phim</Button>
          </NavLink> */}
          <button
            className="flex justify-center items-center bg-green-500 text-white py-2 px-4 font-semibold text-lg rounded mb-5 hover:bg-green-700 transition-all duration-300"
            onClick={() => {
              history.push("/admin/film/addfilm")
            }}
          >
            THÊM PHIM
            <VideoCameraAddOutlined style={{ marginLeft: "10px" }} />
          </button>
          <div className="w-1/2 mb-5">
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
            />
          </div>
          <Table columns={columns} dataSource={data} rowKey={"maPhim"} />
        </div>
      </Content>
    </Fragment>
  );
}

export default AdminFilm;
