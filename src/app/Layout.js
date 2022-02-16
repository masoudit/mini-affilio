import { Alert, Breadcrumb, Layout, Menu, PageHeader } from "antd";
import React, { useState } from "react";

import Sidebar from "./Sidebar";
import "./layout.less";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState();

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />

      <Layout className="site-layout">
        <Header className="site-layout-header" style={{ padding: 0 }}>
          <PageHeader
            className="site-header"
            title="Title"
            subTitle="This is a subtitle"
          />
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <Alert>xxxxxxxxx</Alert>
        </Content>
        <Footer style={{ textAlign: "center" }}>Affiliate 2022</Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
