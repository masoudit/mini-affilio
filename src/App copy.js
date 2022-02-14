// import 'antd/dist/antd.css'
import { Alert, ConfigProvider, DatePicker } from "antd";
import { DatePicker as DatePickerJalali } from "antd-jalali";
import "antd/dist/antd.less";
import locale from "antd/lib/locale/fa_IR";
import moment from "moment-jalaali";
import React from "react";
import "./App.less";

const { RangePicker } = DatePickerJalali;

moment.locale("fa");

function App() {
  const handleChange = () => {};
  return (
    <ConfigProvider locale={locale}>
      <div className="App">
        <div style={{ width: 400, margin: "100px auto" }}>
          <DatePicker onChange={handleChange} />
          <DatePickerJalali onChange={handleChange} />
          <RangePicker />
          <Alert message="Selected Date" description={"test"} />
          <div style={{ marginTop: 16 }}>
            {/* Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'} */}
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
