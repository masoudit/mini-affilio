import { Button } from "antd";
import moment from "moment";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ReactCodeInput, { reactCodeInput } from "react-code-input";

const props_ = {
  className: reactCodeInput,
  inputStyle: {
    // MozAppearance: "textfield",
    // WebkitAppearance: "none",
    // margin: 0,
    width: "42px",
    height: "42px",
    textAlign: "center",
    fontSize: "25px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginLeft: "8px",
  },
  inputStyleInvalid: {
    // fontFamily: "monospace",
    // margin: "4px",
    // MozAppearance: "textfield",
    // width: "15px",
    // borderRadius: "3px",
    // fontSize: "14px",
    // height: "26px",
    // paddingLeft: "7px",
    // backgroundColor: "black",
    // color: "red",
    // border: "1px solid red",
  },
};

const CodeInput = (props) => {
  const [code, setCode] = useState();
  const [retrySend, setRetrySend] = useState(0);
  const [countDown, setCountDown] = useState("02:00");

  useEffect(() => {
    let interval;
    const promiseTimer = () => {
      const endTime = moment().add(2, "minutes");
      return new Promise((resolve) => {
        interval = setInterval(() => {
          const nowTime = moment();
          const tme = moment
            .utc(moment(endTime, "HH:mm:ss").diff(moment(nowTime, "HH:mm:ss")))
            .format("mm:ss");
          setCountDown(tme);

          if (tme === "00:00") resolve(true);
          return tme;
        }, 1000);
      });
    };
    promiseTimer().then((rs) => {
      if (rs) {
        clearInterval(interval);
      }
    });
    return () => {
      clearInterval(interval);
    };
  }, [retrySend]);

  const onChange = (e) => {
    props.form.setFieldsValue({ code: e });
  };

  const retrySendCode = () => {
    props.sendCode();
    setRetrySend((old) => old + 1);
  };

  return (
    <div className="codeInput">
      <ReactCodeInput
        type="number"
        value={code}
        onChange={onChange}
        fields={4}
        {...props_}
      />
      <br />
      <br />
      <div className="">
        {countDown === "00:00" ? (
          <div>
            <Button type="link" onClick={retrySendCode}>
              ارسال مجدد کد
            </Button>
          </div>
        ) : (
          ""
        )}
        <span>زمان باقی مانده :</span>
        <b>{countDown}</b>
      </div>
    </div>
  );
};

CodeInput.propTypes = {
  form: PropTypes.element,
  sendCode: PropTypes.func,
};
export default CodeInput;
