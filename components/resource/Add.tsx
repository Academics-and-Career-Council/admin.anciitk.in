import {
  getTitles,
  getTitles_getResourcesByWing,
} from "./__generated__/getTitles";
import { Menu, Dropdown, Button, Input } from "antd";
import { ApolloError, gql, useQuery } from "@apollo/client";
import Loading3QuartersOutlined from "@ant-design/icons/Loading3QuartersOutlined";
import CloseCircleOutlined from "@ant-design/icons/CloseCircleOutlined";
import DownOutlined from "@ant-design/icons/DownOutlined";
import Spin from "antd/lib/spin";
import { useEffect, useState } from "react";
import Title from "antd/lib/typography/Title";

const ADD_RESOURCE = gql`
  query getTitles($wing: String!) {
    getResourcesByWing(wing: $wing) {
      title
    }
  }
`;

interface props {
  wing: string;
}

// component
const Add: React.FC<props> = ({ wing }) => {
  const [dropMenu, setDropMenu] = useState<string>("--Choose Category--");
  const [menu, setMenu] = useState(<></>);

  const { loading, error, data } = useQuery<getTitles>(ADD_RESOURCE, {
    variables: { wing: wing },
  });
  useEffect(() => {
    if (loading)
      setMenu(
        <Spin
          indicator={<Loading3QuartersOutlined style={{ fontSize: 24 }} spin />}
        />
      );
    else if (error) {
      console.log(error);
      setMenu(
        <>
          <CloseCircleOutlined />
          <p>Please Try Again</p>
        </>
      );
    } else {
      const titles = data?.getResourcesByWing || [{ title: "" }];

      setMenu(
        <Menu>
          {titles.map((title, index) => (
            <Menu.Item
              key={index}
              onClick={(e) => {
                setDropMenu(
                  e.domEvent.currentTarget.textContent || "--Choose Category--"
                );
              }}
            >
              {title.title}
            </Menu.Item>
          ))}
        </Menu>
      );
    }
  }, [loading, error, data]);

  return (
    <>
    <Title level={3}>Heading</Title>
      <Dropdown overlay={menu}>
        <Button>
          {dropMenu}
          <DownOutlined />
        </Button>
      </Dropdown>
      <Title level={5} style={{display:"inline", paddingLeft: 20, paddingRight:20}}>OR</Title>
      <Input placeholder="Enter New Heading" style={{width: 200}} allowClear />
      <br></br>
      Title
      <Input placeholder="Enter Title" allowClear />
      <br></br>
      URL
      <Input placeholder="Enter URL" allowClear />
    </>
  );
};

export default Add;
