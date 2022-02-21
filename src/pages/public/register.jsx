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
  Radio,
  Select,
  Tooltip,
  message,
} from "antd";
import { MaskedInput } from "antd-mask-input";
import Modal from "antd/lib/modal/Modal";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { accountRegister } from "@/app/local/accountSlice";
import NatureImage from "@/assets/images/nature.jpg";
import {
  CONTRACT_TEMPLATE_TYPE,
  LEGAL_STATUS,
} from "@/utils/constants/apiConstants";

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

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const { profile, error, loading } = useSelector((state) => state.account);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (profile) {
      message.success({
        content: t("auth.successLoginMessage"),
        key: "login",
        duration: 1,
      });
      const to = location?.state?.from || "/";
      setTimeout(() => navigate(to), 1000);
    } else if (error) {
      message.error({
        content: t("auth.errorLoginMessage"),
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
      dispatch(
        accountRegister({
          mobile: e.mobile,
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
    console.log("v-------", e);
    e.preventDefault();
    showModal();
  };

  return (
    <AuthLayout>
      <div className="auth__image">
        <div className="image__bg">
          <img src={NatureImage} />
        </div>
        <div className="image__info">
          <h2>به افیلیو بپیوندید</h2>
          <p>با عضویت در پلتفرم افیلیو درآمد خود را چندین برابر کنید.!</p>
          {/* <p>ایجاد اکانت</p> */}
        </div>
      </div>
      <Form
        className="auth__form"
        name="basic"
        // labelCol={{
        //   span: 8,
        // }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <ConfigProvider direction="ltr">
          <Form.Item
            // label="Password"
            name="userType"
            rules={[
              {
                required: true,
                message: "ضروری",
              },
            ]}
            wrapperCol={{
              // offset: 8,
              span: 24,
            }}
          >
            {/* <Radio.Group>
              <Space direction="vertical">
                {Object.keys(CONTRACT_TEMPLATE_TYPE).map((key) => {
                  return (
                    <Radio.Button key={key} value={key}>
                      <span style={{ marginLeft: "10px" }}>
                        {t(`auth.${key}`)}
                      </span>
                      <Tooltip title={<TitleToolTip />}>
                        <InfoCircleOutlined
                          style={{ color: "rgba(0,0,0,.45)", fontSize: "16px" }}
                        />
                      </Tooltip>
                    </Radio.Button>
                  );
                })}
              </Space>
            </Radio.Group> */}
            <div style={{ display: "flex", alignItems: "center" }}>
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
              <Tooltip title={<TitleToolTip />}>
                <InfoCircleOutlined
                  style={{ color: "rgba(0,0,0,.45)", fontSize: "16px" }}
                />
              </Tooltip>
            </div>
          </Form.Item>

          <Form.Item
            // label="Password"
            name="roleType"
            rules={[
              {
                required: true,
                message: "ضروری",
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
            style={{ textAlign: "center", direction: "ltr" }}
            placeholderChar="-"
          />
        </Form.Item>

        <Form.Item
          // label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: t("required"),
            },
          ]}
          style={{ direction: "ltr" }}
        >
          <Input.Password
            size="large"
            style={{ textAlign: "center" }}
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
          ]}
          style={{ direction: "ltr" }}
        >
          <Input.Password
            size="large"
            style={{ textAlign: "center" }}
            placeholder={t("auth.passwordConfirm")}
          />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
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
          <Button size="large" type="dashed" onClick={() => navigate("/login")}>
            برگشت
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </AuthLayout>
  );
};

export default Register;
