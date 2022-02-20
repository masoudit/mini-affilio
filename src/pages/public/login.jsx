// import { updateUser } from "app/local/user";
// import { PRIVATE_BASE_PATH } from "app/routes";
// import { useLoginMutation } from "app/services/mock";
import { Button, Checkbox, ConfigProvider, Form, Input, message } from "antd";
import { MaskedInput } from "antd-mask-input";
import { useEffect, useState } from "react";
// import { MaskedInput } from "react-hook-mask";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { accountLogin } from "@/app/local/accountSlice";
import NatureImage from "@/assets/images/nature.jpg";
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
          // username: "09130238277",
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
            style={{ direction: "ltr" }}
          >
            {/* <Input
              size="large"
              placeholder="شماره تلفن"
            /> */}

            {/* <InputNumber
              // prefix={"09"}
              // defaultValue={130238277}
              formatter={(value) =>
                // `09 ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                `09 ${value}`.replace(/^0\d+\s+\d+\s+\d+$/g, " ")
              }
              parser={(value) => value.replace(/\$\d?|(,*)/g, "")}
              style={{ width: "100%" }}
              // onChange={onChange}
            /> */}
            {/* <MaskedInput
              mask="1111 1111 1111 1111"
              // name="username"
              size="20"
              // onChange={this._onChange}
            /> */}
            <MaskedInput
              // prefix="0"
              // placeholder=""
              mask="0111 111 1111"
              placeholder="شماره تلفن"
              // name="username"
              size="large"
              style={{ textAlign: "center" }}
              // onChange={(e) => {
              //   console.log("v-----", e);
              //   setUsername(e);
              // }}
              placeholderChar="-"
            />
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
            style={{ direction: "ltr" }}
          >
            <Input.Password
              size="large"
              style={{ textAlign: "center" }}
              placeholder="رمز عبور"
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
            onClick={() => {
              navigate("/register");
            }}
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
          <a onClick={() => navigate("/forgot")}>
            <b>یادآوری رمز عبور</b>
          </a>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default Login;
