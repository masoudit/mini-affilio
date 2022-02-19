// import { Link } from "react-router-dom";
import { Button, Result } from "antd";

export default function NotFound() {
  return (
    <div style={{ margin: "auto" }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  );
}
