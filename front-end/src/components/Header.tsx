import { Avatar, Typography, Space } from 'antd';

const { Title } = Typography;

const guysrc = "/img/guy.png";
const girlsrc = "/img/girl.png";

export default function Header() {
  return (
    <>
      <Space size="large">
        <Avatar size={128} icon={<img src={guysrc} alt="avatar" />} />

        <Space size="middle">
          <Title level={1} style={{ margin: 0 }} >
            1
          </Title>

          <Title level={1} style={{ margin: 0 }}>
            -
          </Title>

          <Title level={1} style={{ margin: 0 }}>
            2
          </Title>
        </Space>

        <Avatar size={128} icon={<img src={girlsrc} alt="avatar" />} />
      </Space>
    </>
  );
}