import { AddNotificationVariables } from "../../actions/career/__generated__/AddNotification";
import { UpdateNotificationVariables } from "../../actions/career/__generated__/UpdateNotification";
import { GetNotifications_getNotifications } from "../../container/career/__generated__/GetNotifications";
import MarkDownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import { useState } from "react";
import { Checkbox, Button, Form, Input, message } from "antd";
import router from "next/router";
import updateNotification from "../../actions/career/updateNotification";
import addNotification from "../../actions/career/addNotification";

const NotificationForm: React.FC<{
  data: GetNotifications_getNotifications;
  type: "add" | "edit";
}> = ({ data, type }) => {
  const mdParser = new MarkDownIt();
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const onFinish = (values: any) => {
    setLoading(true);

    if (type == "add") {
      const addVariables: AddNotificationVariables = {
        data: { heading: values.heading, data: values.data.text },
      };

      addNotification(addVariables)
        .then(() => {
          setLoading(false);
          form.resetFields();
          message.success("Notification Successfully added");
          router.push("/career?mode=editnotification", undefined, {
            shallow: true,
          });
        })
        .catch((err) => {
          setLoading(false);
          message.error(err.message);
        });
    } else if (type == "edit") {
      const editVariables: UpdateNotificationVariables = {
        id: data.id,
        data: {
          heading: values.heading,
          data: values.data.text || values.data,
        },
      };

      updateNotification(editVariables)
        .then(() => {
          setLoading(false);
          form.resetFields();
          message.success("Notification Successfully updated");
          router.push("/career?mode=editnotification", undefined, {
            shallow: true,
          });
        })
        .catch((err) => {
          setLoading(false);
          message.error(err.message);
        });
    }
  };

  return (
    <div className="m-4">
      <Form
        labelCol={{ span: 8 }}
        layout="vertical"
        wrapperCol={{ span: 20 }}
        style={{ margin: "20px 0 0 20px" }}
        initialValues={{ ...data, check: false }}
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
          <Input autoFocus />
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
            defaultValue={data.data}
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

export default NotificationForm;
