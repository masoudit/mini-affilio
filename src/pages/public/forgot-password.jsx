// import { updateUser } from "app/local/user";
// import { PRIVATE_BASE_PATH } from "app/routes";
// import { useLoginMutation } from "app/services/mock";
import { Button, ConfigProvider, Form, Input, message } from "antd";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { accountLogin } from "@/app/local/accountSlice";
import NatureImage from "@/assets/images/nature.jpg";
import { useAuth } from "@/utils/hooks/useAuth";

import AuthLayout from "./authLayout";

export const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();
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
      // const login =
      dispatch(
        accountLogin({
          userName: e.username,
          password: e.password,
          rememberMe: e.remember,
        })
      );
      // one way
      // login.then((r) => {
      //   console.log("login-----", r);
      // });

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
          <h2>افیلیو</h2>
          <p>با عضویت در پلتفرم افیلیو درآمد خود را چندین برابر کنید.!</p>
          <a onClick={() => navigate("/register")}>ایجاد اکانت</a>
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
            // label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "نام کاربری ضروری",
              },
            ]}
          >
            <Input size="large" placeholder="شماره تلفن" />
          </Form.Item>
        </ConfigProvider>

        <Form.Item
          wrapperCol={{
            // offset: 8,
            span: 16,
          }}
          className="auth__actions"
        >
          <Button size="large" type="primary" htmlType="submit">
            دریافت کد
          </Button>
          <span className="space-or"></span>
          <Button
            size="large"
            type="dashed"
            onClick={() => {
              navigate("/login");
            }}
          >
            برگشت
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default ForgotPassword;
