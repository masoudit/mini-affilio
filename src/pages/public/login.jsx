// import { updateUser } from "app/local/user";
// import { PRIVATE_BASE_PATH } from "app/routes";
// import { useLoginMutation } from "app/services/mock";
import { Button, Checkbox, ConfigProvider, Form, Input, message } from "antd";
import { MaskedInput } from "antd-mask-input";
import Title from "antd/lib/typography/Title";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { accountLogin, clearState } from "@/app/local/accountSlice";
import { useAuth } from "@/utils/hooks/useAuth";

import AuthLayout from "./authLayout";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();
  const location = useLocation();
  const { t } = useTranslation();
  const [username, setUsername] = useState();

  const { profile, error, loading } = useSelector((state) => state.account);

  useEffect(() => {
    if (profile) {
      message.success({
        content: t("auth.successLoginMessage"),
        key: "login",
        duration: 1,
      });
      // !@TODO Remove this after backend updated
      localStorage.setItem("uId", profile?.data?.user_id);
      const to = location?.state?.from || "/wizard";
      setTimeout(() => navigate(to), 1000);
    } else if (error) {
      message.error({
        content: t("auth.errorLoginMessage"),
        key: "login",
      });
    }
  }, [profile, error]);

  // useEffect(() => {
  //   if (loading) {
  //     message.loading({
  //       content: t("loading"),
  //       key: "login",
  //       duration: loading ? 0 : 1,
  //     });
  //   }
  // }, [loading]);

  const onFinish = async (e) => {
    try {
      // const login =
      const phone = e.username.replaceAll(" ", "").trim();

      dispatch(
        accountLogin({
          userName: phone,
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

  const navigateTo = (name) => {
    dispatch(clearState());
    navigate(name);
  };

  return (
    <AuthLayout>
      <div className="auth__image">
        <div className="image__bg">{/* <img src={NatureImage} /> */}</div>
        <div className="image__info">
          <h2>افیلیو</h2>
          <p>با عضویت در پلتفرم افیلیو درآمد خود را چندین برابر کنید!</p>
          {/* <a onClick={() => navigate("/register")}>ایجاد اکانت</a> */}
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
          // username: "09130238277",
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title level={4} className={"auth__title"}>
          {t("auth.login")}
        </Title>
        <ConfigProvider direction="ltr">
          <Form.Item
            // label="Username"
            name="username"
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
              style={{ textAlign: "right" }}
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
            className="auth__password"
            // style={{ direction: "ltr" }}
          >
            <Input.Password
              size="large"
              style={{ textAlign: "center" }}
              placeholder={t("auth.password")}
            />
          </Form.Item>
        </ConfigProvider>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            // offset: 8,
            span: 16,
          }}
        >
          <Checkbox>یادآوری رمز عبور</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            // offset: 8,
            span: 16,
          }}
          className="auth__actions"
        >
          <Button size="large" type="primary" htmlType="submit">
            ورود
          </Button>
          <span className="space-or">یا</span>
          <Button
            size="large"
            type="dashed"
            onClick={() => navigateTo("/register")}
          >
            ثبت نام
          </Button>
        </Form.Item>

        <Form.Item
          style={{ margin: 0 }}
          // name="remember"
          wrapperCol={{
            // offset: 8,
            span: 16,
          }}
        >
          <a onClick={() => navigateTo("/forgot")}>
            <b>یادآوری رمز عبور</b>
          </a>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default Login;
