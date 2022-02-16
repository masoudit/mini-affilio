import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const PrivateLayout = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.profile);
  return (
    <div className="public__page">
      <Outlet />
    </div>
  );
};

PrivateLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateLayout;
