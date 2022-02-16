import {
  DesktopOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Logo from "@/assets/logo.png";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onCollapse = () => {
    setCollapsed((old) => !old);
  };

  return (
    <Sider
      width={280}
      //   collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      className="sidebar"
    >
      <div className="menu_logo" onClick={onCollapse}>
        {!collapsed ? <img src={Logo} /> : ""}
        {collapsed ? (
          <MenuFoldOutlined className={"collapse_icon"} />
        ) : (
          <MenuUnfoldOutlined className={"collapse_icon"} />
        )}
      </div>
      <Menu className="sidebar_menu" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          {t("Dashboard")}
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          رسانه
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="کاربران">
          <Menu.Item key="3">لیست کاربران</Menu.Item>
          <Menu.Item key="4">افزودن</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="وب سایت ها">
          <Menu.Item key="6">لیست وب سایت ها</Menu.Item>
          <Menu.Item key="8">افزودن</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          لینک ها
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
