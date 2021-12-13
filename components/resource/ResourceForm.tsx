import { Form, Input, Button, Checkbox, message } from "antd";
import { getDocumentEdit_getDocument } from "../../container/resource/__generated__/getDocumentEdit";
import { useEffect, useState } from "react";
import CustomDropdown from "./CustomDropdown";
import { useMutation } from "@apollo/client";
import { ADD_RESOURCE } from "../../actions/resource/AddButton";
import { EDIT_RESOURCE } from "../../actions/resource/EditButton";
import { getAddData, getEditData } from "../../pkg/helpers";
import router from "next/router";
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
  id? : string
}

const ResourceForm: React.FC<props> = ({ data, action, wing, id}) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [form] = Form.useForm();

  const [addObject, { data: addData, loading:loadingAdd, error:errorAdd }] =
    useMutation(ADD_RESOURCE);
  const [editObject, {data:editData, loading:loadingEdit, error:errorEdit}] = useMutation(EDIT_RESOURCE)


  const onFinish = (values: any) => {
    if (action === "add") {
      addObject({ variables: getAddData(values), refetchQueries: "active" });
      if (loadingAdd) {
        setButtonLoading(true);
      }
      if (errorAdd) {
        message.error(`Oops, There was an error . Please try again`, undefined);
      } else {
        form.resetFields();
        message.success("Resource Added Successfully", undefined, () => {
          router.push(
            `/resource/?wing=${router.query.wing}&mode=add`,
            undefined,
            { shallow: false }
          );
        });
      }
    } else if (action === "edit") {
      const formValues = form.getFieldsValue()
      // console.log(formValues.name, formValues.link)
      // console.log(data.category, data.id)
      editObject({variables:getEditData(formValues, data), refetchQueries:"active" })
      if (loadingEdit) {
        setButtonLoading(true);
      }
      if (errorEdit) {
        message.error(`Oops, There was an error . Please try again`, undefined);
      } else {
        message.success("Resource Edited Successfully", undefined, () => {
          router.push(
            `/resource/?wing=${router.query.wing}&mode=edit`,
            undefined,
            { shallow: false }
          );
        });
      }
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
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter a Name" }]}
      >
        <Input autoFocus />
      </Form.Item>
      <Form.Item
        label="URL"
        name="link"
        rules={[{ required: true, message: "Please enter a URL" }]}
      >
        <Input
          type={"url"}
          onChange={() => console.log(form.getFieldsValue())}
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
