import moment from "moment";
import { useEffect, useState } from "react";
import ReactCodeInput, { reactCodeInput } from "react-code-input";

const props = {
  className: reactCodeInput,
  inputStyle: {
    // fontFamily: "monospace",
    // margin: "4px",
    // MozAppearance: "textfield",
    // WebkitAppearance: "none",
    // margin: 0,
    // width: "15px",
    // borderRadius: "3px",
    // fontSize: "14px",
    // height: "26px",
    // paddingLeft: "7px",
    // backgroundColor: "black",
    // color: "lightskyblue",
    // border: "1px solid lightskyblue",
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

const CodeInput = () => {
  const [code, setCode] = useState();
  const [countDown, setCountDown] = useState("02:00");

  useEffect(() => {
    const promiseTimer = new Promise((resolve) => {
      const endTime = moment().add(2, "minutes");
      setInterval(() => {
        const nowTime = moment();
        console.log("v-------");
        const tme = moment
          .utc(moment(endTime, "HH:mm:ss").diff(moment(nowTime, "HH:mm:ss")))
          .format("mm:ss");
        if (tme === "00:00") resolve(true);
        setCountDown(tme);
      }, 1000);
    });
    promiseTimer;
  }, []);

  const onChange = (e) => {
    // setCode("");
    console.log("e-----", e);
  };

  return (
    <div className="codeInput">
      <ReactCodeInput
        type="number"
        value={code}
        onChange={onChange}
        fields={5}
        {...props}
      />
      <br />
      <br />
      <div className="">
        <span>زمان باقی مانده :</span>
        <b>{countDown}</b>
      </div>
    </div>
  );
};
export default CodeInput;
