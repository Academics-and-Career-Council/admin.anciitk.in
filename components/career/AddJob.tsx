import { Form, Input, Button, Checkbox, DatePicker } from "antd";
import { useState } from "react";
import moment from "moment";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";

const AddJob = () => {
  const mdParser = new MarkdownIt();
  const [disabled, setDisabled] = useState(true);

  return (
    <Form
      labelCol={{ span: 4 }}
      layout="vertical"
      wrapperCol={{ span: 16 }}
      style={{ margin: "20px 0 0 20px" }}
      onFinish={(values) => {
        console.log(values);
      }}
      initialValues={{ check: false }}
    >
      <Form.Item
        label="Company Name"
        name="name"
        rules={[{ required: true, message: "Please input company name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Designation"
        name="designation"
        rules={[{ required: true, message: "Please input designation" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Job Location"
        name="location"
        rules={[{ required: true, message: "Please input job location" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Stipend"
        name="stipend"
        rules={[{ required: true, message: "Please input stipend amount" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Deadline"
        name="deadline"
        rules={[{ required: true, message: "Please input deadline" }]}
      >
        <DatePicker format='DD-MM-YYYY HH:mm:ss' showTime={{defaultValue: moment()}} />
      </Form.Item>
      <Form.Item
        label="Eligiblity"
        name="eligiblity"
        rules={[
          { required: true, message: "Please input eligiblity crierion" },
        ]}
      >
        <Input.TextArea rows={3} />
      </Form.Item>
      <Form.Item
        label="Job Description"
        name="jd"
        valuePropName="text"
        rules={[{ required: true, message: "Please input Job description" }]}
      >
        <MdEditor
          style={{ height: "400px" }}
          renderHTML={(text) => mdParser.render(text)}
        />
      </Form.Item>
      <Form.Item
        label="Test Details"
        name="test"
        rules={[{ required: true, message: "Please input test details" }]}
      >
        <Input.TextArea rows={3} />
      </Form.Item>
      <Form.Item
        label="Shortlist Criterion"
        name="shortlist"
        rules={[
          { required: true, message: "Please input shortlist criterion" },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="check" valuePropName="checked">
        <Checkbox onChange={(e) => setDisabled(!e.target.checked)}>
          I have Read and Verified Information
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button disabled={disabled} type="primary" htmlType="submit">
          submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddJob;
