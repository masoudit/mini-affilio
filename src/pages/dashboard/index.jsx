import { Avatar, Card, Col, Row, Skeleton } from "antd";
import { useState } from "react";

const { Meta } = Card;

export default function Dashboard() {
  const [loading] = useState(true);
  return (
    <>
      {/* <h1>Dashboard</h1> */}
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card style={{ marginTop: 16 }} loading={loading}>
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ marginTop: 16 }} loading={loading}>
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
      </Row>

      <Card style={{ width: 300, marginTop: 16 }}>
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </>
  );
}
