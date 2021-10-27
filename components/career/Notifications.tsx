import type { GetNotifications_getNotifications } from "../../container/career/__generated__/GetNotifications";
import { List, Button, Typography } from "antd";
import MarkdownIt from "markdown-it";
import parse, { domToReact } from "html-react-parser";
import { Element } from "domhandler/lib/node";
import moment from "moment";
import DeleteNotificationButton from "../../actions/career/DeleteNotification";

const Notifications: React.FC<{
  notifications: (GetNotifications_getNotifications | null)[];
}> = ({ notifications }) => {
  const mdParser = new MarkdownIt();
  notifications = notifications
    .slice()
    .sort((a, b) => moment(a?.modified).diff(b?.modified));

  return (
    <List
      dataSource={notifications}
      size="large"
      header={
        <Typography.Title style={{ textAlign: "center" }} level={3}>
          Notifications
        </Typography.Title>
      }
      renderItem={(notification, idx) => (
        <List.Item
          actions={[
            <Button key={idx} type="ghost">
              Edit
            </Button>,
            <DeleteNotificationButton id={notification?.id || ""} key={idx} />,
          ]}
        >
          <List.Item.Meta
            title={notification?.heading}
            description={parse(mdParser.render(notification?.data || ""), {
              replace: (domNode) => {
                if (domNode instanceof Element && domNode.name === "p") {
                  return (
                    <p style={{ margin: 0 }}>{domToReact(domNode.children)}</p>
                  );
                }
              },
            })}
          />
          <Typography.Text>
            {moment(notification?.modified).format("MMM Do YY HH:mm a")}
          </Typography.Text>
        </List.Item>
      )}
    />
  );
};

export default Notifications;
