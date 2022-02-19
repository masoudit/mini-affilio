import { Card, Col, Row, Steps } from "antd";
import { Button, Form, Input, InputNumber } from "antd";
import { useEffect, useState } from "react";

import "./styles.less";

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 12,
  },
};

const { Meta } = Card;
const { Step } = Steps;

const StepOne = () => {
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "age"]}
          label="Age"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={["user", "website"]} label="Website">
          <Input />
        </Form.Item>
        <Form.Item name={["user", "introduction"]} label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default function RegisterWizard() {
  const [loading] = useState(false);
  const [current, setCurrent] = useState(0);

  const onChange = () => {};

  useEffect(() => {
    // closeSidebar;
    // newLayout
  });

  return (
    <div className="wizard">
      <br />
      {/* <h1>ثبت نام</h1> */}
      <Row gutter={[16, 16]} align="middle" justify="center">
        <Col span={20}>
          <Card style={{ marginTop: 16 }} loading={loading}>
            <Steps
              type="navigation"
              current={current}
              onChange={onChange}
              className="site-navigation-steps"
            >
              <Step status="finish" title="اطلاعات شخصی" />
              <Step status="process" title="اطلاعات تماس" />
              <Step status="wait" title="اطلاعات پرداخت" />
              <Step status="wait" title="مالیات بر ارزش افزوده" />
            </Steps>
            <div className="steps-content">
              <StepOne />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
