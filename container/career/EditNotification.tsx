import {
  GetNotification,
  GetNotificationVariables,
} from "./__generated__/GetNotification";
import { gql, useQuery } from "@apollo/client";
import { Result } from "antd";
import Loader from "../../components/Loader";
import EditNotification from "../../components/career/EditNotification";

const GET_NOTIFICATION = gql`
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      heading
      data
      modified
    }
  }
`;

const EditNotificationContainer: React.FC<GetNotificationVariables>  = ({id}) => {
  const { loading, error, data } = useQuery<
    GetNotification,
    GetNotificationVariables
  >(GET_NOTIFICATION, {
    variables: {id}
  });

  if (loading) return <Loader />;
  if (error)
    return (
      <Result status="error" title={error.name} subTitle={error.message} />
    );

  return (
    // @ts-ignore
    <EditNotification data={data?.getNotification} />
  )
};

export default EditNotificationContainer
