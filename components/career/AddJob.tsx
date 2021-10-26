import { AddJobVariables } from "../../actions/career/__generated__/AddJob";
import { Form, Input, Button, Checkbox, DatePicker, message } from "antd";
import { useState } from "react";
import moment from "moment";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import addJob from "../../actions/career/addJob";

const AddJob: React.FC = () => {
  const mdParser = new MarkdownIt();
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const onFinish = (values: any) => {
    setLoading(true);
    delete values["check"];
    const variables: AddJobVariables = {
      data: { ...values, jd: values.jd.text, description: values.jd.text },
    };
    addJob(variables)
      .then((data) => {
        message.success("Job Successfully added");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        message.error(err.message);
        setLoading(false);
      });
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      layout="vertical"
      initialValues={{ check: false }}
      wrapperCol={{ span: 16 }}
      style={{ margin: "20px 0 0 20px" }}
      onFinish={onFinish}
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
        <DatePicker
          format="DD-MM-YYYY HH:mm"
          showTime={{ defaultValue: moment() }}
          disabledDate={(curr) => curr < moment().endOf('day')}
        />
      </Form.Item>
      <Form.Item
        label="Eligibility"
        name="eligibility"
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
      <Form.Item
        label="Nature Of Business"
        name="nature_of_business"
        rules={[{ required: true, message: "Please input nature if business" }]}
      >
        <Input.TextArea />
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
  );
};

export default AddJob;
