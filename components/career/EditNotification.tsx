import { Typography } from "antd"
import { GetNotification_getNotification } from "../../container/career/__generated__/GetNotification"
import NotificationForm from "./NotificationForm"

const EditNotification: React.FC<{data: GetNotification_getNotification}> = ({data}) => {
  return (
    <>
      <Typography.Title level={3} style={{ textAlign: "center", marginTop: "10px" }}>EDIT NOTIFICATION FORM</Typography.Title>
      <NotificationForm data={data} type='edit' />
    </>
  )
}

export default EditNotification