// import { updateUser } from "app/local/user";
// import { PRIVATE_BASE_PATH } from "app/routes";
// import { useLoginMutation } from "app/services/mock";
import { Card, Col, Row } from "antd";
import PropTypes from "prop-types";

import "./styles.less";

export const AuthLayout = (props) => {
  return (
    <div className="auth-wrap">
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
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
