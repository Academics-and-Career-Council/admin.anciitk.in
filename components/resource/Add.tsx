import {
  getTitles,
  getTitles_getResourcesByWing,
} from "./__generated__/getTitles";
import { Menu, Dropdown, Button, Input, Form, Checkbox, Select } from "antd";
import { gql, useQuery } from "@apollo/client";
import Loading3QuartersOutlined from "@ant-design/icons/Loading3QuartersOutlined";
import CloseCircleOutlined from "@ant-design/icons/CloseCircleOutlined";
import DownOutlined from "@ant-design/icons/DownOutlined";
import Spin from "antd/lib/spin";
import React, { useEffect, useState } from "react";
import Title from "antd/lib/typography/Title";
import { useRouter } from "next/router";
import MenuItem from "antd/lib/menu/MenuItem";
import { toTitleCase } from "../../pkg/helpers";
import head from "next/head";

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
  const [dropMenu, setDropMenu] = useState<string | undefined>(undefined);
  const [heading, setHeading] = useState<string>("");
  const [menu, setMenu] = useState(<></>);
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [disabled, setDisabled] = useState(true);
  const [loader, setLoader] = useState(false);
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
        <>
          {titles.map((title, index) => (
            <Select.Option key={index + 1} value={title.title}>
              {title.title}
            </Select.Option>
          ))}
        </>
      );
    }
  }, [loading, error, data]);

  return (
    <>
      <Title level={3} style={{ textAlign: "center" }}>
        ADD RESOURCE
      </Title>
      {console.log(dropMenu, heading)}
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} layout="vertical">
        <Form.Item
          label="Heading"
          name="headingDrop"
          rules={heading === ""? [{ required: true, message: "Please input Heading" }]: []}
        >
          <Select
            placeholder="-- Choose Heading --"
            allowClear
            value={dropMenu}
            onChange={(e) => {
              setDropMenu(e);
            }}
            disabled={heading === "" ? false : true}
          >
            {/* <Select.Option value="demo">Demo</Select.Option>1 */}
            {menu}
          </Select>
        </Form.Item>
        <Title level={5}>OR</Title>
        <Form.Item name="headingInput" rules= {dropMenu === undefined? [{ required: true, message: "Please input Heading" }]: []}>
          <Input
            placeholder="Enter New Heading"
            allowClear
            disabled={dropMenu === undefined ? false : true}
            value={heading}
            onChange={(e) => {
              setHeading(e.target.value);
            }}
          />
        </Form.Item>

        {/* <Form.Item
          label="Heading"
          rules={[
            { required: true, message: "Please choose or enter a Heading" },
          ]}
        >
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
        </Form.Item> */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter a Name" }]}
        >
          <Input
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            allowClear
          />
        </Form.Item>

        <Form.Item
          label="URL"
          name="url"
          rules={[{ required: true, message: "Please enter a URL" }]}
        >
          <Input
            // value={link}
            // onChange={(e) => setLink(e.target.value)}
            allowClear
          />
        </Form.Item>
        <Form.Item name="check" valuePropName="checked">
          <Checkbox onChange={(e) => setDisabled(!e.target.checked)}>
            I have Read and Verified Information
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            disabled={disabled}
            loading={loading}
            type="primary"
            htmlType="submit"
          >
            submit
          </Button>
        </Form.Item>
      </Form>
      {/* <div style={{ textAlign: "center" }}>
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
      </div> */}
    </>
  );
};

export default Add;
