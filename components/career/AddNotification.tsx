import MarkDownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import { useState } from "react";
import { Typography, Checkbox, Space, Button, Popover } from "antd";

const AddNotification = () => {
  const mdParser = new MarkDownIt();
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div className="m-4">
      <Space direction="vertical" style={{ width: "100%" }} size="middle">
        <Typography.Title level={4}>Write Notification here:</Typography.Title>
        <MdEditor
          value={text}
          renderHTML={(text) => mdParser.render(text)}
          onChange={({ text }) => setText(text)}
          style={{ height: "300px" }}
        />
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        >
          Read and verified information
        </Checkbox>
        {!checked ? (
          <Popover
            content={
              <Typography.Text>
                Please select above checkbox to submit.
              </Typography.Text>
            }
            placement='bottomLeft'
          >
            <Button disabled>Submit</Button>
          </Popover>
        ) : (
          <Button>Submit</Button>
        )}
      </Space>
    </div>
  );
};

export default AddNotification;
