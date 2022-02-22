import { Spin } from "antd";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { accountUserDetail } from "@/app/local/accountSlice";
import { appLoading } from "@/app/local/appSlice";

import MainLayout from "./Layout";

const PublicLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading } = useSelector((state) => state.app);

  useEffect(async () => {
    //!TODO Remove this
    const uId = localStorage.getItem("uId");
    dispatch(appLoading(true));
    const detail = await dispatch(accountUserDetail({ uId }));
    dispatch(appLoading(false));
    if (!detail || !detail?.payload || detail?.payload?.errorCode !== 200) {
      navigate("/login");
    }
  }, []);

  if (loading) {
    return (
      <div className="app__loading">
        <Spin size="large" />
      </div>
    );
  }

  let mode;
  if (location?.pathname === "/wizard") mode = "wizard";

  return (
    <MainLayout mode={mode}>
      <Outlet />
    </MainLayout>
  );
};

PublicLayout.propTypes = {
  children: PropTypes.element,
};

export default PublicLayout;
