import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

import MainLayout from "./Layout";

const RegisterLayout = () => {
  return (
    <MainLayout mode="wizard">
      <Outlet />
    </MainLayout>
  );
};

RegisterLayout.propTypes = {
  children: PropTypes.element,
};

export default RegisterLayout;
