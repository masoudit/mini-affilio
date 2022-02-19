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
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Logo from "@/assets/logo.png";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = (props) => {
  const isWizard = props.mode === "wizard";
  const [collapsed, setCollapsed] = useState(isWizard || false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onCollapse = () => {
    if (isWizard) return;
    setCollapsed((old) => !old);
  };

  return (
    <Sider
      width={280}
      collapsed={collapsed}
      onCollapse={onCollapse}
      className="sidebar"
    >
      <div
        className={`menu_logo ${collapsed ? "menu_logo--collapsed" : ""}`}
        onClick={onCollapse}
      >
        {!collapsed ? <img src={Logo} style={{ height: "25px" }} /> : ""}
        {collapsed ? (
          <MenuFoldOutlined className={"collapse_icon"} />
        ) : (
          <MenuUnfoldOutlined className={"collapse_icon"} />
        )}
      </div>
      <Menu
        disabled={isWizard}
        className="sidebar_menu"
        defaultSelectedKeys={["1"]}
        mode="inline"
      >
        <Menu.Item
          key="1"
          icon={<PieChartOutlined />}
          onClick={() => navigate("/")}
        >
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
        <Menu.Item
          key="10"
          onClick={() => navigate("kits")}
          icon={<FileOutlined />}
        >
          کیت
        </Menu.Item>
        <Menu.Item
          key="11"
          onClick={() => navigate("404")}
          icon={<FileOutlined />}
        >
          خطاها
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

Sidebar.propTypes = {
  mode: PropTypes.string,
};

export default Sidebar;
