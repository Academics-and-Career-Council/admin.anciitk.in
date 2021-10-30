import NotificationForm from "./NotificationForm";
import { Typography } from "antd";

const AddNotification: React.FC = () => {
  return (
    <>
      <Typography.Title level={3} style={{ textAlign: "center", marginTop: "10px" }}>ADD NOTIFICATION FORM</Typography.Title>
      <NotificationForm
        data={{
          __typename: "Notification",
          id: "",
          heading: "",
          data: "",
          modified: "",
        }}
        type="add"
      />
    </>
    
  );
};

export default AddNotification;
