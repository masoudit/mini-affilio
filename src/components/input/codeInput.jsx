import { useState } from "react";
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
        <b>12:12</b>
      </div>
    </div>
  );
};
export default CodeInput;
