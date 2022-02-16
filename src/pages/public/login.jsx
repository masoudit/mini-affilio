// import { updateUser } from "app/local/user";
// import { PRIVATE_BASE_PATH } from "app/routes";
// import { useLoginMutation } from "app/services/mock";
import {
  Alert,
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Layout,
  Row,
} from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "@/utils/hooks/useAuth";

const Content = Layout.Content;

export const Login = () => {
  const dispatch = useDispatch();
  const { push } = useNavigate();
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (user?.token) {
      // const to = location?.state?.from || PRIVATE_BASE_PATH;
      // push(to);
    }
  }, [user]);

  const [formState, setFormState] = useState({
    username: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  // const [login, { isLoading }] = useLoginMutation();

  const handleChange = ({ target: { name, value } }) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const user = await login({
      //   email: formState.username,
      //   password: formState.password,
      // }).unwrap();
      // dispatch(
      //   //this is dummy
      //   updateUser({
      //     profile:
      //       formState.password.indexOf("admin") !== -1
      //         ? {
      //             first_name: "ADMIN",
      //             type: "ADMIN",
      //           }
      //         : null,
      //     token: user?.token,
      //     fetched: formState.password.indexOf("admin") !== -1 ? true : false,
      //   })
      // );
      //it is just needed for token based authentication
      window.localStorage.setItem("token", user?.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // <Layout>
    //   <Content>
    <Row justify="space-around" align="middle">
      <Col span={12} style={{ backgroundColor: "#fff", marginTop: "20vh" }}>
        <Alert
          message="Hint: just submit the form. and if you want to see the admin panel
          type admin for password"
        />
        <Divider />
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
    //   </Content>
    // </Layout>
  );
};

export default Login;
