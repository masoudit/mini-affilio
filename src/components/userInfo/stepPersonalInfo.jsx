import { InboxOutlined } from "@ant-design/icons";
import { verifyIranianNationalId } from "@persian-tools/persian-tools";
import { Col, Form, Input, Row, Select, Upload } from "antd";
import { DatePicker } from "antd-jalali";
import { Button } from "antd/lib/radio";
import lodash from "lodash";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { GENDER } from "@/utils/constants/apiConstants";

import InputUpload from "../input/inputUpload";

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 12,
  },
};

const StepPersonalInfo = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

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
        className="afl-form"
        layout="vertical"
        labelCol={{
          span: 22,
        }}
        wrapperCol={{
          span: 22,
        }}
      >
        <Row gutter={24} style={{ width: "80%" }}>
          <Col span={8}>
            <Form.Item
              name={["user", "firstName"]}
              label={t("user.firstName")}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item
              name={["user", "lastName"]}
              label={t("user.lastName")}
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
        <Row gutter={24} style={{ width: "80%" }}>
          <Col md={8}>
            <Form.Item
              name={["user", "fatherName"]}
              label={t("user.fatherName")}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item
              name={["user", "gender"]}
              label={t("user.gender")}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select>
                {Object.keys(GENDER).map((key) => (
                  <Select.Option key={key}>{t("user." + key)}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item
              name={["user", "birthday"]}
              label={t("user.birthday")}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker Jalali style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24} style={{ width: "80%" }}>
          <Col md={8}>
            <Form.Item
              name={["user", "nationalNumber"]}
              label={t("user.nationalNumber")}
              rules={[
                {
                  required: true,
                },
                () => ({
                  validator(_, value) {
                    if (verifyIranianNationalId(value)) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error(t("user.notValidNationalNumber"))
                    );
                  },
                }),
              ]}
            >
              <Input maxLength="10" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item
              name={["user", "identityNumber"]}
              label={t("user.identityNumber")}
              rules={[
                {
                  required: true,
                  max: 10,
                },
                () => ({
                  validator(_, value) {
                    if (
                      !lodash.isNaN(Number(value)) &&
                      lodash.isNumber(Number(value))
                    ) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error(t("user.notValidIdentNumber"))
                    );
                  },
                }),
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24} style={{ width: "80%" }}>
          <Col md={8}>
            <InputUpload />
          </Col>

          <Col md={8}>
            <Form.Item label={t("user.picIdentityNumber1")}>
              <Form.Item
                name={["user", "picIdentityNumber1"]}
                valuePropName="fileList"
                // getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
          </Col>
        </Row>
        {/* <Form.Item name={["user", "website"]} label="Website">
            <Input />
          </Form.Item> */}
        {/* <Form.Item name={["user", "introduction"]} label="Introduction">
            <Input.TextArea />
          </Form.Item> */}
        <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default StepPersonalInfo;
