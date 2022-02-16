import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

import MainLayout from "./Layout";

const PublicLayout = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

PublicLayout.propTypes = {
  children: PropTypes.element,
};

export default PublicLayout;
