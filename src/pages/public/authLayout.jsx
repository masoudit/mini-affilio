// import { updateUser } from "app/local/user";
// import { PRIVATE_BASE_PATH } from "app/routes";
// import { useLoginMutation } from "app/services/mock";
import { Card, Col, Row } from "antd";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";

import "./styles.less";

export const AuthLayout = (props) => {
  const ref = useRef(null);
  const { loading } = useSelector((state) => state.account);

  useEffect(() => {
    if (loading) ref.current.continuousStart();
    else ref.current.complete();
  }, [loading]);

  return (
    <div className="auth-wrap">
      <LoadingBar color="#fa8c15" ref={ref} />
      <Row justify="space-around" align="middle">
        <Col lg={12} md={16} xs={22}>
          <Card className="auth__card">
            <div className="d-flex">{props.children}</div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.element,
};

export default AuthLayout;
