import { Alert, Card, Col, Row, Select, Steps, Switch } from "antd";
import { Button, Form, Input } from "antd";
import { DatePicker as DatePickerJalali } from "antd-jalali";
import { t } from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { GENDER, USER_TYPE } from "@/utils/constants/apiConstants";

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
        className="afl-form"
        layout="vertical"
      >
        <Row gutter={24}>
          <Col span={24}>
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
          </Col>
          <Col md={24}>
            <Form.Item
              name={["user", "lastName"]}
              label={t("lastName")}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={24}>
            <Form.Item
              name={["user", "fatherName"]}
              label={t("fatherName")}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name={["user", "gender"]}
          label={t("gender")}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            {Object.keys(GENDER).map((key) => (
              <Select.Option key={key}>{t(key)}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name={["user", "birthday"]}
          label={t("birthday")}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePickerJalali />
        </Form.Item>

        <Form.Item
          name={["user", "nationalNumber"]}
          label={t("nationalNumber")}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["user", "identityNumber"]}
          label={t("identityNumber")}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
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
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(0);
  const [legal, setLegal] = useState(false);
  const [showLegal, setShowLegal] = useState(false);

  const { profile } = useSelector((state) => state.account);
  // console.log("e-----", profile?.data?.user_type);
  const userType = profile?.data?.user_type;

  useEffect(() => {
    if (userType === USER_TYPE.PUBLISHER) {
      setShowLegal(true);
    }
    // closeSidebar;
    // newLayout
  }, [userType]);

  const onChangeLegal = (e) => {
    setLoading(true);
    setTimeout(() => {
      setLegal(e);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="wizard">
      <br />
      {/* <h1>ثبت نام</h1> */}

      <Row gutter={[16, 16]} align="middle" justify="">
        <Col span={2}></Col>
        {showLegal ? (
          <Col span={20}>
            <Card style={{ marginTop: 16 }}>
              <p>
                لطفا، نوع کاربری خود را مشخص کرده و سپس فرم زیر را تکمیل نمایید:
              </p>

              <Switch size="default" checked={legal} onChange={onChangeLegal} />
              <b style={{ marginRight: 10 }}>
                {legal ? t("wizard.legalPerson") : t("wizard.naturalPerson")}
              </b>
            </Card>
          </Col>
        ) : (
          <Col span={20}>
            <Alert
              message="
                شما به عنوان فروشنده(MERCHANT) وارد افیلیو شده اید، لطفا اطلاعات
                زیر را تکمیل نمایید"
              type="info"
              showIcon
            />

            {/* <Card style={{ marginTop: 16 }}>
              <div>
                شما به عنوان فروشنده(MERCHANT) وارد افیلیو شده اید، لطفا اطلاعات
                زیر را تکمیل نمایید
              </div>
            </Card> */}
          </Col>
        )}
      </Row>
      <Row gutter={[16, 16]} align="middle" justify="center">
        <Col span={20}>
          <Card style={{ marginTop: 16 }} loading={loading}>
            {/* <p>
              لطفا، نوع کاربری خود را مشخص کرده و سپس فرم زیر را تکمیل نمایید:
            </p>
            <Switch size="default" checked={legal} onChange={setLegal} />
            <b style={{ marginRight: 10 }}>
              {legal ? t("wizard.legalPerson") : t("wizard.naturalPerson")}
            </b>
            <Divider /> */}
            <Steps
              type="navigation"
              current={current}
              // onChange={onChange}
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
