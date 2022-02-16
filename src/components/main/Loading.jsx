import PropTypes from "prop-types";

// import styles from "./Loading.module.css";

const AppLoading = ({ open }) => {
  return (
    <div open={open}>
      <span>Loading...</span>
    </div>
  );
};

AppLoading.propTypes = {
  // persist: PropTypes.bool,
  open: PropTypes.bool,
};

export default AppLoading;
