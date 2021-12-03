import { RemoveJob, RemoveJobVariables } from "./__generated__/RemoveJob";
import { gql, useMutation } from "@apollo/client";
import { Button, message, Popconfirm, Typography } from "antd";
import { useState } from "react";

const DELETE_JOB = gql`
  mutation RemoveJob($id: ID!) {
    removeJob(id: $id) {
      id
    }
  }
`;

const DeleteJobButton: React.FC<RemoveJobVariables> = ({ id }) => {
  const [commit, { loading }] = useMutation<RemoveJob, RemoveJobVariables>(
    DELETE_JOB,
    { variables: { id }, refetchQueries: ["GetAdminJobs"] }
  );
  const [visible, setVisible] = useState(false);

  return (
    <Popconfirm
      visible={visible}
      placement="topRight"
      title={
        <>
          <Typography.Title level={5}>
            Are you sure you want to delete this job? Once performed this action
            cant be reversed
          </Typography.Title>
          <Typography.Text strong>
            Note this will also delete all the associated applications
          </Typography.Text>
        </>
      }
      onConfirm={() =>
        commit()
          .then(() =>
            message.success(
              "Job removed Successfully with all the applications associated with it"
            )
          )
          .catch((err) => {
            message.error(err.message);
            console.log(err);
          })
      }
      okButtonProps={{ loading }}
      onCancel={() => setVisible(false)}
    >
      <Button onClick={() => setVisible(true)}>delete</Button>
    </Popconfirm>
  );
};

export default DeleteJobButton;
