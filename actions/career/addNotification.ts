import {
  AddNotification,
  AddNotificationVariables,
} from "./__generated__/AddNotification";
import { gql } from "@apollo/client";
import { CareerClient } from "../../graphql/clients";

const ADD_NOTIFICATION = gql`
  mutation AddNotification($data: NotificationData!) {
    addNotification(data: $data) {
      id
      heading
      data
    }
  }
`;

const addNotification = async ({ data }: AddNotificationVariables) => {
  return await CareerClient.mutate<AddNotification, AddNotificationVariables>({
    mutation: ADD_NOTIFICATION,
    variables: { data },
    refetchQueries: ['GetNotifications']
  });
};

export default addNotification;
