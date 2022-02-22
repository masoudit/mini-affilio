import { Card, Col, Row, Steps, Switch } from "antd";
import { Button, Form, Input, InputNumber } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
        initialValues={{
          name: "",
        }}
      >
        <Form.Item
          name={["user", "firstName"]}
          label={t("firstName")}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input value="" />
        </Form.Item>
        <Form.Item
          name={["user", "lastName"]}
          label={t("lastName")}
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
        {/* <Form.Item name={["user", "website"]} label="Website">
          <Input />
        </Form.Item> */}
        {/* <Form.Item name={["user", "introduction"]} label="Introduction">
          <Input.TextArea />
        </Form.Item> */}
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

      <Row gutter={[16, 16]} align="middle" justify="">
        <Col span={2}></Col>
        <Col span={20}>
          <Form.Item valuePropName="checked">
            <Switch size="default" title="xx" />
          </Form.Item>
        </Col>
      </Row>
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
