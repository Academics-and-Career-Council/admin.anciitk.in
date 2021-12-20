import {
  getTitles,
  getTitles_getResourcesByWing,
} from "./__generated__/getTitles";
import { Input, Select } from "antd";
import { gql, useQuery } from "@apollo/client";
import Loading3QuartersOutlined from "@ant-design/icons/Loading3QuartersOutlined";
import CloseCircleOutlined from "@ant-design/icons/CloseCircleOutlined";
import Spin from "antd/lib/spin";
import React, { useEffect, useState } from "react";
import Title from "antd/lib/typography/Title";

const ADD_RESOURCE = gql`
  query getTitles($wing: String!) {
    getResourcesByWing(wing: $wing) {
      title
    }
  }
`;

const CustomDropdown: React.FC<{ wing: string; Form: any; form: any }> = ({
  wing,
  Form,
  form,
}) => {
  const [dropDisable, setDropDisable] = useState<boolean>(false);
  const [headingDisable, setHeadingDisable] = useState<boolean>(false);
  const [menu, setMenu] = useState(<></>);

  const { loading, error, data } = useQuery<getTitles>(ADD_RESOURCE, {
    variables: { wing: wing },
    nextFetchPolicy: "network-only"
  });

  const change = () => {
    // for development purpose
    // console.log(form.getFieldsValue().headingDrop);
    // console.log(headingDisable, dropDisable)
    if (
      form.getFieldsValue().headingInput === "" &&
      form.getFieldsValue().headingDrop === undefined
    ) {
      setDropDisable(false);
      setHeadingDisable(false);
    } else if (
      form.getFieldsValue().headingInput !== "" &&
      form.getFieldsValue().headingDrop === undefined
    ) {
      setDropDisable(true);
      setHeadingDisable(false);
    } else if (
      form.getFieldsValue().headingInput === "" &&
      form.getFieldsValue().headingDrop !== undefined
    ) {
      setDropDisable(false);
      setHeadingDisable(true);
    }
  };

  useEffect(() => {
    if (loading)
      setMenu(
        <Select.Option value="loading">
          <Spin
            indicator={<Loading3QuartersOutlined style={{ fontSize: 24 }} spin />}
          />
        </Select.Option>
      );
    else if (error) {
      // console.log(error);
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
      <Form.Item
        label={<Title level={5}>Heading</Title>}
        name="headingDrop"
        rules={
          dropDisable
            ? []
            : [{ required: true, message: "Please input Heading" }]
        }
      >
        <Select
          placeholder="-- Choose Heading --"
          allowClear
          onChange={change}
          disabled={dropDisable}
        >
          {/* <Select.Option value="demo">Demo</Select.Option>1 */}
          {menu}
        </Select>
      </Form.Item>
      <Title level={5}>or</Title>
      <Form.Item
        name="headingInput"
        rules={
          headingDisable
            ? []
            : [{ required: true, message: "Please input Heading" }]
        }
      >
        <Input
          placeholder="Enter New Heading"
          allowClear
          disabled={headingDisable}
          onChange={change}
        />
      </Form.Item>
    </>
  );
};

export default CustomDropdown;
