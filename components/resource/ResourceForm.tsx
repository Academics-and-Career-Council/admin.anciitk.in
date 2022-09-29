import { getDocumentEdit_getDocument } from "../../container/resource/__generated__/getDocumentEdit";
import { getOrder } from "../../actions/resource/__generated__/getOrder";
import { Form, Input, Button, Checkbox, message, Typography } from "antd";
import { useState } from "react";
import CustomDropdown from "./CustomDropdown";
import { useQuery } from "@apollo/client";
import addResource, {
  ADD_RESOURCE,
  GET_ORDER,
} from "../../actions/resource/AddButton";
import editResource from "../../actions/resource/EditButton";
import { getAddData, getEditData } from "../../pkg/helpers";
import router from "next/router";
const { Title } = Typography;

type dataType = {
  headingDrop: string | undefined;
  headingInput: string;
  name: string;
  url: string;
};

interface props {
  data: getDocumentEdit_getDocument | dataType | undefined;
  action: "edit" | "add";
  wing: string;
  id?: string;
}

const ResourceForm: React.FC<props> = ({ data, action, wing, id }) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [form] = Form.useForm();

  const {
    data: orderData,
    error: orderError,
    loading: orderLoading,
  } = useQuery<getOrder>(GET_ORDER, {
    variables: { wing: wing },
  });

  const onFinish = (values: any) => {
    setButtonLoading(true);

    if (action === "add") {
      const addData = getAddData(
        values,
        String(orderData?.getResourcesByWing.length),
        wing
      );
      // console.log(addData)
      addResource(addData)
        .then((data) => {
          message.success("Resource Added Successfully");
          setButtonLoading(false);
          router.push(
            `/resource?wing=${router.query.wing}&mode=edit`,
            undefined,
            { shallow: true }
          );
        })
        .catch((err) => {
          console.log(err);
          message.error(err.message);
          setButtonLoading(false);
        });
    } else if (action === "edit") {
      const formValues = form.getFieldsValue();
      const editData = getEditData(formValues, data);
      editResource(editData)
        .then((data) => {
          message.success("Resource Edited Successfully");
          setButtonLoading(false);
          router.push(
            `/resource?wing=${router.query.wing}&mode=edit`,
            undefined,
            { shallow: true }
          );
        })
        .catch((err) => {
          console.log(err);
          message.error(err.message);
          setButtonLoading(false);
        });
    }
  };

  return (
    <Form
      labelCol={{ span: 8 }}
      layout="vertical"
      initialValues={{
        ...data,
        check: false,
      }}
      wrapperCol={{ span: 20 }}
      style={{ margin: "20px 0 0 30px" }}
      form={form}
      onFinish={onFinish}
    >
      {action === "add" ? (
        <CustomDropdown wing={wing} Form={Form} form={form} />
      ) : null}
      <Form.Item
        label={<Title level={5}>Name</Title>}
        name="name"
        rules={[{ required: true, message: "Please enter a Name" }]}
      >
        <Input autoFocus />
      </Form.Item>
      <Form.Item
        label={<Title level={5}>URL</Title>}
        name="link"
        rules={[{ required: true, message: "Please enter a URL" }]}
      >
        <Input type={"url"} />
      </Form.Item>
      <Form.Item name="check" valuePropName="checked">
        <Checkbox onChange={(e) => setDisabled(!e.target.checked)}>
          I have Read and Verified Information
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          disabled={disabled}
          loading={buttonLoading}
          type="primary"
          htmlType="submit"
        >
          {action === "add" ? "Submit" : "Save Changes"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResourceForm;
