import React, {Fragment} from "react";
import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;
function Dashboard(props) {
  return (
    <Fragment>
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Admin/User</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: "100%" }}
        >
          Bill is a cat.
        </div>
      </Content>
    </Fragment>
  );
}

export default Dashboard;
