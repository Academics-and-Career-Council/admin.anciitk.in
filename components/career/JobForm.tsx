import { AddJobVariables } from "../../actions/career/__generated__/AddJob";
import { UpdateJobVariables } from "../../actions/career/__generated__/UpdateJob";
import { GetAdminJob_getAdminJob } from "../../container/career/__generated__/GetAdminJob";
import { Form, Input, Button, Checkbox, DatePicker, message, Select } from "antd";
import { useState } from "react";
import moment from "moment";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import addJob from "../../actions/career/addJob";
import updateJob from "../../actions/career/updateJob";
import router from "next/router";

const { Option } = Select

const JobForm: React.FC<{
  data: GetAdminJob_getAdminJob;
  type: "add" | "edit";
}> = ({ data, type }) => {
  const mdParser = new MarkdownIt();
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const onFinish = (values: any) => {
    console.log(values)
    setLoading(true);
    delete values["check"];

    if (type == "add") {
      const addVariables: AddJobVariables = {
        data: {
          ...values,
          jd: values.jd.text,
          description: values.jd.text,
          application_process: values.application_process.text
        },
      };

      addJob(addVariables)
        .then((data) => {
          message.success("Job Successfully added");
          setLoading(false);
          router.push("/career?mode=editjob", undefined, { shallow: true });
        })
        .catch((err) => {
          console.log(err);
          message.error(err.message);
          setLoading(false);
        });
    } else if (type == "edit") {
      const editVariables: UpdateJobVariables = {
        id: data.id,
        data: {
          ...values,
          jd: values.jd.text || values.jd,
          description: values.jd.text || values.jd,
          application_process: values.application_process.text || values.application_process
        },
      };

      console.log(editVariables)

      updateJob(editVariables)
        .then((data) => {
          message.success("Job Successfully updated");
          setLoading(false);
          router.push("/career?mode=editjob", undefined, { shallow: true });
        })
        .catch((err) => {
          console.log(err);
          message.error(err.message);
          setLoading(false);
        });
    }
  };

  return (
    <Form
      labelCol={{ span: 8 }}
      layout="vertical"
      initialValues={{
        ...data,
        deadline: moment(data.deadline),
        check: false,
      }}
      wrapperCol={{ span: 20 }}
      style={{ margin: "20px 0 0 30px" }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Company Name"
        name="name"
        rules={[{ required: true, message: "Please input company name" }]}
      >
        <Input autoFocus />
      </Form.Item>
      <Form.Item
        label="Designation"
        name="designation"
        rules={[{ required: true, message: "Please input designation" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Role Type"
        name="type"
        rules={[{ required: true, message: "Please input role type" }]}
      >
        <Select
          placeholder="Not Selected"
          allowClear
        >
          <Option value="Corporate">Corporate</Option>
          <Option value="Research">Research</Option>
        </Select>
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
          showTime={{ defaultValue: undefined }}
          disabledDate={(curr) => curr < moment().endOf("day")}
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
          defaultValue={data.jd}
          renderHTML={(text) => mdParser.render(text)}
        />
      </Form.Item>
      <Form.Item
        label="Application Process"
        name="application_process"
        valuePropName="text"
        rules={[{ required: true, message: "Please input application process" }]}
      >
        <MdEditor
          style={{ height: "300px" }}
          defaultValue={data.jd}
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

export default JobForm;
