import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const PublicLayout = ({ children }) => {
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state?.user?.profile);
  return (
    <div className="public__page">
      <Outlet />
    </div>
  );
};

PublicLayout.propTypes = {
  children: PropTypes.element,
};

export default PublicLayout;
