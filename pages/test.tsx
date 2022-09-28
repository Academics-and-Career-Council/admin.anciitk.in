import { Form } from "antd";
import CustomURL from "../components/resource/CustomURL";

const Test = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form}>
      <CustomURL form={form} Form={Form} />;
    </Form>
  );
};

export default Test;
