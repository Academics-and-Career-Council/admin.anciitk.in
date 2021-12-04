import {
  getTitles,
  getTitles_getResourcesByWing,
} from "./__generated__/getTitles";
import { Menu, Dropdown, Button, Input, Form } from "antd";
import { gql, useQuery } from "@apollo/client";
import Loading3QuartersOutlined from "@ant-design/icons/Loading3QuartersOutlined";
import CloseCircleOutlined from "@ant-design/icons/CloseCircleOutlined";
import DownOutlined from "@ant-design/icons/DownOutlined";
import Spin from "antd/lib/spin";
import React, { useEffect, useState } from "react";
import Title from "antd/lib/typography/Title";
import { useRouter } from "next/router";
import MenuItem from "antd/lib/menu/MenuItem";

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
  const [dropMenu, setDropMenu] = useState<string>("-- Choose Category --");
  const [heading, setHeading] = useState<string>("");
  const [menu, setMenu] = useState(<></>);
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const router = useRouter();
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
        <div style={{ textAlign: "center", backgroundColor: "white" }}>
          <CloseCircleOutlined />
          <p>Please Try Again</p>
        </div>
      );
    } else {
      const titles = data?.getResourcesByWing || [{ title: "" }];

      setMenu(
        <Menu>
          <Menu.Item
            key={0}
            style={{ textAlign: "center" }}
            onClick={() => setDropMenu("-- Choose Category --")}
          >
            -- Choose Category --
          </Menu.Item>
          {titles.map((title, index) => (
            <Menu.Item
              key={index + 1}
              style={{ textAlign: "center" }}
              onClick={(e) => {
                setDropMenu(
                  e.domEvent.currentTarget.textContent ||
                    "-- Choose Category --"
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
      <Title level={3} style={{ textAlign: "center" }}>
        Add Resource
      </Title>

      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Heading">
          <Dropdown overlay={menu} disabled={heading === "" ? false : true}>
            <Button>
              {dropMenu}
              <DownOutlined />
            </Button>
          </Dropdown>
          <Title
            level={5}
            style={{ display: "inline", paddingLeft: 20, paddingRight: 20 }}
          >
            OR
          </Title>
          <Input
            disabled={dropMenu === "-- Choose Category --" ? false : true}
            placeholder="Enter New Heading"
            style={{ width: "35%" }}
            allowClear
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Name">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            allowClear
          />
        </Form.Item>

        <Form.Item label="Link">
          <Input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            allowClear
          />
        </Form.Item>
      </Form>
      <div style={{ textAlign: "center" }}>
        <Button type="primary" className="m-2">
          Save
        </Button>
        <Button
          type="primary"
          danger
          className="m-2"
          onClick={() => {
            const backURL = `/resource?wing=${router.query.wing}&mode=${router.query.mode}`;
            router.push(backURL, undefined, { shallow: false });
          }}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

export default Add;
