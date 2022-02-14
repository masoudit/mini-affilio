import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.less';
import 'antd/dist/antd.less'
import 'antd/dist/antd.css'
import { Alert, DatePicker, ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/fa_IR';
import moment from 'moment-jalaali';
import { DatePicker as DatePickerJalali } from "antd-jalali";
import Layout_ from './app/Layout';
// const { RangePicker } = DatePickerJalali;

moment.locale("fa");

function App() {
  const handleChange = () => {}
  return (
    <ConfigProvider locale={locale} >
      <Layout_ >
        xxx
      </Layout_>
    </ConfigProvider>
  );
}

export default App;
