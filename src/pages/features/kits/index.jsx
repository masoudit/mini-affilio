// import 'antd/dist/antd.css'
import { Alert, DatePicker, Divider } from "antd";
import { DatePicker as DatePickerJalali } from "antd-jalali";
import "antd/dist/antd.less";
import moment from "moment-jalaali";
import React from "react";

// import "./App1.less";

const { RangePicker } = DatePickerJalali;

moment.locale("fa");

function UiKit() {
  const handleChange = () => {};
  return (
    <div className="App">
      <DatePicker onChange={handleChange} />
      <DatePickerJalali onChange={handleChange} />
      <RangePicker />
      <Divider />
      <Alert message="Selected Date" description={"test"} />
      <div style={{ marginTop: 16 }}></div>
    </div>
  );
}

export default UiKit;
