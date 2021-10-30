import {
  UpdateNotification,
  UpdateNotificationVariables,
} from "./__generated__/UpdateNotification";
import { gql } from "@apollo/client";
import { CareerClient } from "../../graphql/clients";

const UPDATE_NOTIFICATION = gql`
  mutation UpdateNotification($id: ID!, $data: NotificationData!) {
    updateNotification(id: $id, data: $data) {
      id
      heading
      data
      modified
    }
  }
`;

const commit = async ({ id, data }: UpdateNotificationVariables) => {
  return await CareerClient.mutate<
    UpdateNotification,
    UpdateNotificationVariables
  >({
    mutation: UPDATE_NOTIFICATION,
    variables: {
      id,
      data,
    },
    refetchQueries: ['GetNotifications']
  });
};

export default commit