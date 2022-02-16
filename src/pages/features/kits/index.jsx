// import 'antd/dist/antd.css'
import { Alert, DatePicker, Divider, Space, Steps, Table, Tag } from "antd";
import { DatePicker as DatePickerJalali } from "antd-jalali";
import "antd/dist/antd.less";
import moment from "moment-jalaali";
import React from "react";

// import "./App1.less";

const { RangePicker } = DatePickerJalali;

moment.locale("fa");

function UiKit() {
  const handleChange = () => {};

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <div className="App">
      <DatePicker onChange={handleChange} />
      <DatePickerJalali onChange={handleChange} />
      <RangePicker />
      <Divider />
      <Alert message="Selected Date" description={"test"} />
      <div style={{ marginTop: 16 }}></div>

      <Divider />

      <Steps current={1}>
        <Steps.Step title="Finished" description="This is a description." />
        <Steps.Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Steps.Step title="Waiting" description="This is a description." />
      </Steps>
      <Divider />

      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default UiKit;
