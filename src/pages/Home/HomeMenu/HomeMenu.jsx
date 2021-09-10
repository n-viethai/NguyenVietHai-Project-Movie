import React from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;

export default function HomeMenu(props) {
  return (
    <div>
      <Tabs tabPosition="left" size="large">
        <TabPane
          tab={
            <img src="https:picsum.photos/50/50" className="rounded-full"></img>
          }
          key="1"
        >
          Content of Tab 1
        </TabPane>
        <TabPane
          tab={
            <img src="https:picsum.photos/50/50" className="rounded-full"></img>
          }
          key="2"
        >
          Content of Tab 2
        </TabPane>
        <TabPane
          tab={
            <img src="https:picsum.photos/50/50" className="rounded-full"></img>
          }
          key="3"
        >
          Content of Tab 3
        </TabPane>
      </Tabs>
    </div>
  );
}
