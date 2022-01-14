import React, { Fragment, useState } from "react";
import { Layout, Menu } from "antd";
import "./adminTemplate.css";
import { DesktopOutlined, FileOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";
import { USER_LOGIN, ACCESS_TOKEN } from "../../util/setting/config";
import { useSelector } from "react-redux";
import { history } from "../../App";

const { Header, Footer, Sider } = Layout;
function AdminTemplate(props) {
  const [collapsed, setCollapsed] = useState(false);
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  const { Component, ...restProps } = props;
  if (!localStorage.getItem(USER_LOGIN)) {
    alert("Bạn không có quyền truy cập vào trang này!");
    return <Redirect to="/home" />;
  }
    if (userLogin.maLoaiNguoiDung !== "QuanTri") {
      alert("Bạn không có quyền truy cập vào trang này!");
      return <Redirect to="/home" />;
    }
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Layout className=" 2xl:max-w-screen-2xl mx-auto" style={{ minHeight: "100vh" }}>
              <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo flex justify-center py-5">
                  <img
                    src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                    alt="logo"
                    style={{ width: "80%" }}
                  />
                </div>
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <NavLink to="/admin/user">User</NavLink>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<FileOutlined />}>
                    <NavLink to="/admin/film">Film</NavLink>
                  </Menu.Item>
                  <Menu.Item key="3" icon={<DesktopOutlined />}>
                    <NavLink to="/admin/showtime">Showtime</NavLink>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header
                  className="site-layout-background"
                  style={{ padding: 0 }}
                >
                  <div className="flex items-center justify-end px-5">
                    <div className="mr-2 rounded-full bg-black w-8 h-8 text-white font-semibold flex items-center justify-center">
                      <UserOutlined />
                    </div>
                    <button
                      className="self-center rounded text-black mr-4 font-semibold  "
                      onClick={() => {
                        history.push("/profile");
                      }}
                    >
                      {userLogin.taiKhoan}
                    </button>
                    <button
                      className="mx-4 text-black font-semibold"
                      onClick={() => {
                        localStorage.removeItem(USER_LOGIN);
                        localStorage.removeItem(ACCESS_TOKEN);
                        window.location.reload();
                      }}
                    >
                      Log out
                    </button>
                  </div>
                </Header>
                <Component {...propsRoute} />
                <Footer style={{ textAlign: "center" }}>
                  Ant Design ©2018 Created by Ant UED
                </Footer>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
}

export default AdminTemplate;
