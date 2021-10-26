import type { GetNotifications } from "./__generated__/GetNotifications"
import { gql, useQuery } from "@apollo/client"
import { Result } from "antd"

import Loader from "../../components/Loader"
import Notifications from "../../components/career/Notifications"

const  GET_NOTIFICATIONS = gql`
  query GetNotifications{
    getNotifications{
      id,
      heading,
      data
    }
  }
`

const NotificationsContainer: React.FC = () => {
  const {loading, error, data} = useQuery<GetNotifications>(GET_NOTIFICATIONS, {variables: {}})
  if(loading) return <Loader />
  if(error) return (
    <Result status='error' title={error.name} subTitle={error.message} />
  )
  return (
    <Notifications notifications={data?.getNotifications || []}/>
  )
}

export default NotificationsContainer