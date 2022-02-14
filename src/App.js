import { ConfigProvider } from "antd";
import "antd/dist/antd.less";
// import "antd/dist/antd.css";
import locale from "antd/lib/locale/fa_IR";
import moment from "moment-jalaali";
import React from "react";

import Layout_ from "@/app/Layout";

import "./App.less";

// const { RangePicker } = DatePickerJalali;

moment.locale("fa");

function App() {
  const handleChange = () => {};
  return (
    <ConfigProvider locale={locale}>
      <Layout_>xxx</Layout_>
    </ConfigProvider>
  );
}

export default App;
