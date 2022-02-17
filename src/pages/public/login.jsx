// import { updateUser } from "app/local/user";
// import { PRIVATE_BASE_PATH } from "app/routes";
// import { useLoginMutation } from "app/services/mock";
import {
  Button,
  Card,
  Checkbox,
  Col,
  ConfigProvider,
  Form,
  Input,
  Layout,
  Row,
  message,
} from "antd";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { accountLogin } from "@/app/local/accountSlice";
import NatureImage from "@/assets/images/nature.jpg";
import { useAuth } from "@/utils/hooks/useAuth";

import "./styles.less";

// import { login } from "@/app/local/accountSlice";

const Content = Layout.Content;

export const Login = () => {
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
    // <Layout>
    //   <Content>
    <Row justify="space-around" align="middle">
      <Col span={10} style={{ marginTop: "30vh" }}>
        {/* <Alert
          message="Hint: just submit the form. and if you want to see the admin panel
          type admin for password"
        /> */}
        {/* <Divider /> */}
        <Card className="login__card">
          <div className="d-flex">
            <div className="login__image">
              <div className="image__bg">
                <img src={NatureImage} />
              </div>
              <div className="image__info">
                <h2>ورود</h2>
                <p>
                  Sign In By Signing Up, you can avail full features of our
                  services. Get an account !!!
                </p>
              </div>
            </div>
            <Form
              className="login__form"
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
                className="login__actions"
              >
                <Button size="large" type="primary" htmlType="submit">
                  ورود
                </Button>
                <span className="space-or">یا</span>
                <Button size="large" type="dashed">
                  ثبت نام
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </Col>
    </Row>
    //   </Content>
    // </Layout>
  );
};

export default Login;
