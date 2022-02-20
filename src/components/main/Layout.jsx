import { SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, PageHeader } from "antd";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Sidebar from "./Sidebar";
import "./layout.less";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const MainLayout = (props) => {
  const { children, mode } = props;
  const isWizard = mode === "wizard";

  const [collapsed, setCollapsed] = useState();

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar mode={mode} />
      <Layout className="site-layout">
        <Header className="site-layout-header" style={{ padding: 0 }}>
          <PageHeader
            className="site-header"
            title="پیشخوان"
            subTitle="افیلیو"
            extra={[
              <SettingOutlined style={{ fontSize: "22px" }} key={1} />,
              <UserOutlined style={{ fontSize: "22px" }} key={1} />,
            ]}
          />
        </Header>
        <Content style={{ margin: "0 16px" }}>
          {!isWizard ? (
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>خانه</Breadcrumb.Item>
              <Breadcrumb.Item>پیشخوان</Breadcrumb.Item>
            </Breadcrumb>
          ) : (
            <br />
          )}
          <div>{children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Affiliate 2022</Footer>
      </Layout>
    </Layout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  mode: PropTypes.string,
};

export default MainLayout;
