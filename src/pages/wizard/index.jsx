import { Alert, Card, Col, Row, Steps, Switch } from "antd";
import { t } from "i18next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { publisherSetLegal } from "@/app/local/publisherSlice";
import StepPersonalInfo from "@/components/userInfo/stepPersonalInfo";
import { USER_TYPE } from "@/utils/constants/apiConstants";

import "./styles.less";

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 12,
  },
};

const { Meta } = Card;
const { Step } = Steps;

export default function RegisterWizard() {
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(0);
  const [legal, setLegal] = useState(false);
  const [showLegal, setShowLegal] = useState(false);
  const dispatch = useDispatch();

  const { profile } = useSelector((state) => state.account);
  // console.log("e-----", profile?.data?.user_type);
  const userType = profile?.data?.user_type;

  useEffect(() => {
    if (userType === USER_TYPE.PUBLISHER) {
      setShowLegal(true);
    }
    // closeSidebar;
    // newLayout
  }, [userType]);

  const onChangeLegal = (e) => {
    setLoading(true);
    setTimeout(() => {
      setLegal(e);
      setLoading(false);
      const uId = localStorage.getItem("uId");
      dispatch(
        publisherSetLegal({
          status: legal ? "Legal" : "Natural",
          uId,
        })
      );
    }, 500);
  };

  const onChange = (e) => {
    setCurrent(e);
  };

  return (
    <div className="wizard">
      <br />
      {/* <h1>ثبت نام</h1> */}

      <Row gutter={[16, 16]} align="middle" justify="">
        <Col span={2}></Col>
        {showLegal ? (
          <Col span={20}>
            <Card style={{ marginTop: 16 }}>
              <p>
                لطفا، نوع کاربری خود را مشخص کرده و سپس فرم زیر را تکمیل نمایید:
              </p>

              <Switch size="default" checked={legal} onChange={onChangeLegal} />
              <b style={{ marginRight: 10 }}>
                {legal ? t("wizard.legalPerson") : t("wizard.naturalPerson")}
              </b>
            </Card>
          </Col>
        ) : (
          <Col span={20}>
            <Alert
              message="
                شما به عنوان فروشنده(MERCHANT) وارد افیلیو شده اید، لطفا اطلاعات
                زیر را تکمیل نمایید"
              type="info"
              showIcon
            />

            {/* <Card style={{ marginTop: 16 }}>
              <div>
                شما به عنوان فروشنده(MERCHANT) وارد افیلیو شده اید، لطفا اطلاعات
                زیر را تکمیل نمایید
              </div>
            </Card> */}
          </Col>
        )}
      </Row>
      <Row gutter={[16, 16]} align="middle" justify="center">
        <Col span={20}>
          <Card style={{ marginTop: 16 }} loading={loading}>
            {/* <p>
              لطفا، نوع کاربری خود را مشخص کرده و سپس فرم زیر را تکمیل نمایید:
            </p>
            <Switch size="default" checked={legal} onChange={setLegal} />
            <b style={{ marginRight: 10 }}>
              {legal ? t("wizard.legalPerson") : t("wizard.naturalPerson")}
            </b>
            <Divider /> */}
            <Steps
              type="navigation"
              current={current}
              onChange={onChange}
              className="site-navigation-steps"
            >
              <Step status="finish" title="اطلاعات شخصی" />
              <Step status="process" title="اطلاعات تماس" />
              <Step status="payment" title="اطلاعات پرداخت" />
              <Step status="tax" title="مالیات بر ارزش افزوده" />
            </Steps>
            <div className="steps-content">
              <div className={`content_info ${current === 0 ? "active" : ""}`}>
                <StepPersonalInfo />
              </div>
              <div className={`content_info ${current === 1 ? "active" : ""}`}>
                222
              </div>
              <div className={`content_info ${current === 2 ? "active" : ""}`}>
                333
              </div>
              <div className={`content_info ${current === 4 ? "active" : ""}`}>
                444
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
