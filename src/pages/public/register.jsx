// import { updateUser } from "app/local/user";
// import { PRIVATE_BASE_PATH } from "app/routes";
// import { useLoginMutation } from "app/services/mock";
import { InfoCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  ConfigProvider,
  Form,
  Input,
  Modal,
  Radio,
  Select,
  Tooltip,
  message,
} from "antd";
import { MaskedInput } from "antd-mask-input";
import Title from "antd/lib/typography/Title";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { accountRegister } from "@/app/local/accountSlice";
import CodeInput from "@/components/input/codeInput";
// import NatureImage from "@/assets/images/nature.jpg";
import {
  CONTRACT_TEMPLATE_TYPE,
  LEGAL_STATUS,
} from "@/utils/constants/apiConstants";
import { getLastError } from "@/utils/helper";

// import { useAuth } from "@/utils/hooks/useAuth";
import AuthLayout from "./authLayout";

const TitleToolTip = () => {
  return (
    <>
      <b>PUBLISHER</b>
      <br />
      نمایش دهنده آگهی هستم و فضای تبلیغاتی دارم (ناشر) با عضویت در پلتفرم
      افیلیو به عنوان ناشر، می‌توانید با استفاده از ترافیک سایت یا شبکه‌های
      اجتماعی خود، مشتریان بسیاری برای فروشندگان جذب کرده و در نهایت کسب درآمد
      کنید.
      <br />
      <br />
      <b>MERCHANT</b>
      <br />
      فروشگاه هستم و ﻣﯽ‌خواهم محصولم را تبلیغ ﮐﻨﻢ (فروشنده) با عضویت در پلتفرم
      افیلیو به عنوان فروشنده، می‌توانید با استفاده از ترافیک سایت یا شبکه‌های
      اجتماعی ناشران به دنبال فروش و همچنین کسب درآمد بیشتر باشید.
    </>
  );
};

const Mode = {
  REGISTER: "REGISTER",
  VERIFY: "VERIFY",
};

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [mode, setMode] = useState(Mode.VERIFY);

  const { profile, error, loading } = useSelector((state) => state.account);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = (isAgree = false) => {
    if (isAgree) {
      form.setFieldsValue({ agreement: true });
    }
    setIsModalVisible((old) => !old);
  };

  useEffect(() => {
    if (profile) {
      message.success({
        content: t("auth.successLoginMessage"),
        key: "login",
        duration: 1,
      });
      setMode();
      // const to = location?.state?.from || "/";
      // setTimeout(() => navigate(to), 1000);
    } else if (error) {
      const errorMessage = error?.Message || getLastError(error);
      message.error({
        content: errorMessage,
        key: "login",
      });
    }
  }, [profile, error]);

  useEffect(() => {
    if (loading) {
      message.loading({
        content: "Waiting ...",
        key: "login",
        duration: loading ? 0 : 1,
      });
    }
  }, [loading]);

  const onFinish = async (e) => {
    try {
      const mobile_ = e.mobile.trim().replaceAll(" ", "");
      dispatch(
        accountRegister({
          mobile: mobile_,
          password: e.password,
          confirmPassword: e.passwordConfirm,
          roleType: e.roleType,
          // referralId: e.referralId,
          agreement: e.agreement,
        })
      );

      // window.localStorage.setItem("token", user?.token);
    } catch (err) {
      console.log(err);
    }
  };

  const openAgreement = (e) => {
    e.preventDefault();
    handleModal();
  };

  return (
    <AuthLayout>
      <div className="auth__image">
        <div className="image__bg">{/* <img src={NatureImage} /> */}</div>
        <div className="image__info">
          <h2>به افیلیو بپیوندید</h2>
          <p>با عضویت در پلتفرم افیلیو درآمد خود را چندین برابر کنید!</p>
          {/* <p>ایجاد اکانت</p> */}
        </div>
      </div>
      {mode === Mode.REGISTER ? (
        <Form
          form={form}
          className="auth__form"
          name="basic"
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Title level={4} className={"auth__title"}>
            {t("auth.register")}
          </Title>
          <ConfigProvider direction="ltr">
            <div style={{ display: "flex", position: "relative" }}>
              <Form.Item
                name="userType"
                rules={[
                  {
                    required: true,
                    message: t("required"),
                  },
                ]}
                wrapperCol={{
                  // offset: 8,
                  span: 24,
                }}
                style={{ flexGrow: 1 }}
                // tooltip="What do you want others to call you?"
              >
                <Select
                  size="large"
                  style={{ flexGrow: 1, display: "flex", marginLeft: "10px" }}
                  placeholder={t("auth.selectTypeUser")}
                >
                  {Object.keys(CONTRACT_TEMPLATE_TYPE).map((key) => {
                    return (
                      <Select.Option key={key} value={key}>
                        {t(`auth.${key}`)}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Tooltip title={<TitleToolTip />} placement="left">
                <InfoCircleOutlined className={"icon__roleType"} />
              </Tooltip>
            </div>

            <Form.Item noStyle shouldUpdate>
              {({ getFieldValue }) => {
                return getFieldValue("userType") === 2 ? (
                  <Form.Item
                    // label="Password"
                    name="roleType"
                    rules={[
                      {
                        required: true,
                        message: t("required"),
                      },
                    ]}
                  >
                    <Radio.Group>
                      {Object.keys(LEGAL_STATUS).map((key) => {
                        return (
                          <Radio key={key} value={key}>
                            {t("auth." + key)}
                          </Radio>
                        );
                      })}
                    </Radio.Group>
                  </Form.Item>
                ) : null;
              }}
            </Form.Item>
          </ConfigProvider>

          <Form.Item
            // label="Username"
            name="mobile"
            rules={[
              {
                required: true,
                message: t("required"),
              },
            ]}
            style={{ direction: "ltr" }}
          >
            <MaskedInput
              // prefix="0"
              mask="0111 111 1111"
              placeholder={t("auth.phone")}
              size="large"
              style={{ textAlign: "right", direction: "ltr" }}
              placeholderChar="-"
            />
          </Form.Item>

          <Form.Item
            // label="Password"
            name="password"
            className="auth__password"
            rules={[
              {
                required: true,
                // message: t("auth.helpPassword"),
                pattern: new RegExp(
                  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
                ),
              },
            ]}
            help={t("auth.helpPassword")}
            style={{ direction: "ltr" }}
            hasFeedback
          >
            <Input.Password
              size="large"
              // style={{ textAlign: "center" }}
              placeholder={t("auth.password")}
            />
          </Form.Item>

          <Form.Item
            // label="Password"
            name="passwordConfirm"
            rules={[
              {
                required: true,
                message: t("required"),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error(t("auth.passwordNotMatch")));
                },
              }),
            ]}
            style={{ direction: "ltr" }}
            dependencies={["password"]}
            hasFeedback
          >
            <Input.Password
              size="large"
              // style={{ textAlign: "center" }}
              placeholder={t("auth.passwordConfirm")}
            />
          </Form.Item>

          <br />

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: t("required"),
              },
            ]}
            wrapperCol={{
              // offset: 8,
              span: 24,
            }}
          >
            <Checkbox>
              با ثبت نام در افیلیو،{" "}
              <a onClick={openAgreement}>{t("auth.showAgreement")}</a> را می
              پذیریم
            </Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              // offset: 8,
              span: 16,
            }}
            className="auth__actions"
          >
            <Button size="large" type="primary" htmlType="submit">
              ثبت نام
            </Button>
            <span className="space-or"></span>
            <Button
              size="large"
              type="dashed"
              onClick={() => navigate("/login")}
            >
              برگشت
            </Button>
          </Form.Item>
        </Form>
      ) : (
        ""
      )}

      {mode === Mode.VERIFY ? (
        <Form form={form} className="auth__form" name="basic">
          <Title level={4} className={"auth__title"}>
            {t("auth.verify")}
          </Title>
          <p>لطفا کد ارسال شده به شماره xxx را وارد کنید:</p>
          <a>تغییر شماره موبایل</a>
          <br />
          <br />
          <div style={{ direction: "ltr" }}>
            <CodeInput />
          </div>
          <br />

          <Form.Item
            wrapperCol={{
              // offset: 8,
              span: 16,
            }}
            className="auth__actions"
          >
            <Button size="large" type="primary" htmlType="submit">
              ثبت نام
            </Button>
            <span className="space-or"></span>
            <Button
              size="large"
              type="dashed"
              onClick={() => setMode(Mode.REGISTER)}
            >
              برگشت
            </Button>
          </Form.Item>
        </Form>
      ) : (
        ""
      )}

      <Modal
        title={t("auth.contractTitle")}
        visible={isModalVisible}
        onOk={() => handleModal(true)}
        onCancel={() => handleModal(false)}
        className={"auth__modal"}
        okText={t("agree")}
        cancelText={false}
      >
        <div>{t("auth.contractText")}</div>
      </Modal>
    </AuthLayout>
  );
};

export default Register;
