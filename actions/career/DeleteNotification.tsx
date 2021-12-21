import {
  RemoveNotification,
  RemoveNotificationVariables,
} from "./__generated__/RemoveNotification";
import { Button, message } from "antd";
import { gql, useMutation } from "@apollo/client";

const DELETE_NOTIFICATION = gql`
  mutation RemoveNotification($id: ID!) {
    removeNotification(id: $id) {
      id
    }
  }
`;

const DeleteNotificationButton: React.FC<RemoveNotificationVariables> = ({
  id,
}) => {
  const [commit, { loading }] = useMutation<
    RemoveNotification,
    RemoveNotificationVariables
  >(DELETE_NOTIFICATION, {
    variables: { id },
    refetchQueries: ["GetNotifications"],
  });

  return (
    <Button
      loading={loading}
      onClick={() =>
        commit()
          .then(() => message.success("Notification removed successfully"))
          .catch((err) => {
            message.error(err.message);
            console.error(err);
          })
      }
    >
      Delete
    </Button>
  );
};

export default DeleteNotificationButton;
