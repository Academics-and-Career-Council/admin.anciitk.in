import { Form, Input, Button } from "antd";
import { getDocumentEdit_getDocument } from "../../container/resource/__generated__/getDocumentEdit";
import { useState } from "react";
import { useRouter } from "next/router";

const Editor: React.FC<{ data: getDocumentEdit_getDocument | undefined }> = ({
  data,
}) => {
  const router = useRouter();
  const [name, setName] = useState<string | undefined>(data?.name);
  const [link, setlink] = useState<string | undefined>(data?.link);
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Name">
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Link">
          <Input value={link} onChange={(e) => setlink(e.target.value)} />
        </Form.Item>
      </Form>
      <div style={{ textAlign: "center" }}>
        <Button type="primary" className="m-2">
          Save
        </Button>
        <Button
          type="primary"
          danger
          className="m-2"
          onClick={() => {
            const backURL = `/resource?wing=${router.query.wing}&mode=${router.query.mode}`;
            router.push(backURL, undefined, { shallow: false });
          }}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

export default Editor;
