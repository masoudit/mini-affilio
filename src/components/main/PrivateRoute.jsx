import PropTypes from "prop-types";
import { Route, useNavigate } from "react-router-dom";

import { useAuth } from "@/utils/hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.token
          ? children
          : navigate("/login", { state: { from: location } })
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
