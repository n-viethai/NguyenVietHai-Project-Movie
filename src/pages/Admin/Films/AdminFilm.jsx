import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Breadcrumb, Input, Button, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { layDanhSachPhimAction } from "../../../redux/actions/QuanLyPhimAction";
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
  }, []);
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
            <NavLink to="/">
              <EditOutlined
                style={{ fontSize: "24px", color: "blue", marginRight: "20px" }}
              />
            </NavLink>
            <NavLink to="/">
              <DeleteOutlined style={{ fontSize: "24px", color: "red" }} />
            </NavLink>
          </Fragment>
        );
      },
    },
  ];

  const data = arrFilmDefault;
  const onSearch = (value) => console.log(value);

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
          <Button className="mb-5" onClick={()=>{
            history.push("/admin/film/addfilm")
          }}>Thêm phim</Button>
          <div className="w-1/2 mb-5">
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
            />
          </div>
          <Table columns={columns} dataSource={data} />
        </div>
      </Content>
    </Fragment>
  );
}

export default AdminFilm;
