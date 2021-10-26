import { AddNotificationVariables } from "../../actions/career/__generated__/AddNotification";
import MarkDownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import { useState } from "react";
import { Checkbox, Button, Form, Input, message } from "antd";
import addNotification from "../../actions/career/addNotification";

const AddNotification: React.FC = () => {
  const mdParser = new MarkDownIt();
  const [form] = Form.useForm()
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const onFinish = (values: any) => {
    setLoading(true);
    const variables: AddNotificationVariables = {
      data: { heading: values.heading, data: values.data.text },
    };
    addNotification(variables)
      .then(() => {
        setLoading(false);
        form.resetFields()
        message.success("Notification Successfully added");
      })
      .catch((err) => {
        setLoading(false);
        message.error(err.message);
      });
  };
  
  return (
    <div className="m-4">
      <Form
        labelCol={{ span: 4 }}
        layout="vertical"
        wrapperCol={{ span: 16 }}
        style={{ margin: "20px 0 0 20px" }}
        initialValues={{ check: false }}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          label="Title"
          name="heading"
          rules={[
            { required: true, message: "Please input notification title" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Notification"
          name="data"
          valuePropName="text"
          rules={[
            { required: true, message: "Please input notification body" },
          ]}
        >
          <MdEditor
            renderHTML={(text) => mdParser.render(text)}
            style={{ height: "300px" }}
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
    </div>
  );
};

export default AddNotification;
