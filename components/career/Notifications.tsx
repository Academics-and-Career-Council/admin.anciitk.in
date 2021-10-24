import { List, Button, Typography, Space } from "antd";
import MarkdownIt from "markdown-it";
import parse, { domToReact } from "html-react-parser";
import { Element } from "domhandler/lib/node";

const data = [
  {
    heading: "Notif 1",
    data: "This is a notification",
  },
  {
    heading: "Notif 2",
    data: "This is a notification",
  },
  {
    heading: "Notif 3",
    data: "This is a notification",
  },
  {
    heading: "Notif 4",
    data: "This is a notification",
  },
  {
    heading: "Notif 4",
    data: "This is a notification",
  },
  {
    heading: "Notif 4",
    data: "This is a notification",
  },
  {
    heading: "Notif 4",
    data: "This is a notification",
  },
  {
    heading: "Notif 4",
    data: "This is a notification",
  },
];

const Notifications = () => {
  const mdParser = new MarkdownIt();
  return (
    <List
      dataSource={data}
      size="large"
      header={
        <Typography.Title style={{ textAlign: "center" }} level={3}>
          Notifications
        </Typography.Title>
      }
      renderItem={(item, idx) => (
        <List.Item
          actions={[
            <Button key={idx} type="ghost">
              Edit
            </Button>,
            <Button key={idx} type="ghost">
              Delete
            </Button>,
          ]}
        >
          <List.Item.Meta
            title={item.heading}
            description={parse(mdParser.render(item.data), {
              replace: (domNode) => {
                if (domNode instanceof Element && domNode.name === "p") {
                  return (
                    <p style={{ margin: 0 }}>{domToReact(domNode.children)}</p>
                  );
                }
              },
            })}
          />
        </List.Item>
      )}
    />
  );
};

export default Notifications;
