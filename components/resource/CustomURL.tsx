import { message, Upload, Input } from "antd";
import React, { useEffect, useState } from "react";
import Title from "antd/lib/typography/Title";
import { InboxOutlined } from "@ant-design/icons";
const { Dragger } = Upload;
import axios from "axios";

const CustomURL: React.FC<{ Form: any; form: any }> = ({ Form, form }) => {
  const [urlDisable, setUrlDisable] = useState<boolean>(false);
  const [dragDisable, setDragDisable] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [fileListLength, setFileListLength] = useState<number>(0);

  const change = () => {
    if (form.getFieldsValue().URLInput === "" && fileListLength === 0) {
      setUrlDisable(false);
      setDragDisable(false);
    } else if (form.getFieldsValue().URLInput !== "" && fileListLength === 0) {
      setUrlDisable(true);
      setDragDisable(false);
    } else if (form.getFieldsValue().URLInput === "" && fileListLength !== 0) {
      setUrlDisable(false);
      setDragDisable(true);
    }
  };

  const props = {
    name: "file",
    action: url,
    onChange(info: any) {
      const { status } = info.file;
      setFileListLength(info.fileList.length);
      // console.log(info.fileList.length);
      // console.log(info.fileList);
      // console.log(fileListLength)
      change();
      if (status !== "uploading") {
        // console.log(info.file, info.fileList);
        // console.log(info.fileList.lenght)
        // console.log(info.fileList)
        // setFileListLength(info.fileList.length);
        // change();
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: any) {
      change();
      console.log("Dropped files", e.dataTransfer.files);
    },
    onRemove(file: any) {
      console.log("onRemove called");
      console.log(fileListLength);
      setFileListLength(fileListLength - 1);
      console.log(fileListLength);
      change();
      return axios
        .delete(url)
        .then(() => {
          change();
          return true;
        })
        .catch(() => {
          change();
          return false;
        });
    },
    disabled: urlDisable,
    maxCount: 1,
  };

  // useEffect(() => {
  //   if (loading)
  //     setMenu(
  //       <Select.Option value="loading">
  //         <Spin
  //           indicator={<Loading3QuartersOutlined style={{ fontSize: 24 }} spin />}
  //         />
  //       </Select.Option>
  //     );
  //   else if (error) {
  //     // console.log(error);
  //     setMenu(
  //       <div style={{ textAlign: "center", backgroundColor: "white" }}>
  //         <CloseCircleOutlined />
  //         <p>Please Try Again</p>
  //       </div>
  //     );
  //   } else {
  //     const titles = data?.getResourcesByWing || [{ title: "" }];

  //     setMenu(
  //       <>
  //         {titles.map((title, index) => (
  //           <Select.Option key={index + 1} value={title.title}>
  //             {title.title}
  //           </Select.Option>
  //         ))}
  //       </>
  //     );
  //   }
  // }, [loading, error, data]);

  return (
    <>
      <Form.Item
        name="URLInput"
        rules={
          dragDisable ? [] : [{ required: true, message: "Please input URL" }]
        }
      >
        <Input
          placeholder="Enter New URL"
          allowClear
          disabled={dragDisable}
          onChange={change}
        />
      </Form.Item>
      <Title level={5}>or</Title>
      <Form.Item>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">Only pdf or image files accepted</p>
        </Dragger>
      </Form.Item>
    </>
  );
};

export default CustomURL;
