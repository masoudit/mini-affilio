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
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { accountRegister } from "@/app/local/accountSlice";
import NatureImage from "@/assets/images/nature.jpg";

// import { useAuth } from "@/utils/hooks/useAuth";
import AuthLayout from "./authLayout";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const { profile, error, loading } = useSelector((state) => state.account);

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
          confirmPassword: e.passwordNew,
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
            <Select
              prefix={
                <Tooltip title="Extra information">
                  <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                </Tooltip>
              }
              size="large"
              placeholder={t("انتخاب")}
            >
              <Select.Option value="china">ناشر</Select.Option>
              <Select.Option value="usa">فروشگاه</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            // label="Username"
            name="mobile"
            rules={[
              {
                required: true,
                message: "ضروری",
              },
            ]}
          >
            <Input size="large" placeholder="شماره تلفن" />
          </Form.Item>

          <Form.Item
            // label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "رمز عبور ضروری",
              },
            ]}
          >
            <Input.Password size="large" placeholder="* * * * *" />
          </Form.Item>

          <Form.Item
            // label="Password"
            name="passwordNew"
            rules={[
              {
                required: true,
                message: "رمز عبور ضروری",
              },
            ]}
          >
            <Input.Password size="large" placeholder="* * * * *" />
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
              <Radio value="legal">{t("")}</Radio>
              <Radio value="noLegal">item 2</Radio>
            </Radio.Group>
          </Form.Item>
        </ConfigProvider>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            // offset: 8,
            span: 24,
          }}
        >
          <Checkbox>با ثبت نام در افیلیو، شرایط و قوانین را می پذیریم</Checkbox>
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
    </AuthLayout>
  );
};

export default Register;
