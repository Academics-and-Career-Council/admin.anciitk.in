import { removeJob, removeJobVariables } from "./__generated__/removeJob";
import { gql, useMutation } from "@apollo/client";
import { Button, message } from "antd";

const DELETE_JOB = gql`
  mutation removeJob($id: ID!) {
    removeJob(id: $id) {
      id
    }
  }
`;

const DeleteJob: React.FC<removeJobVariables> = ({ id }) => {
  const [commit, { data, loading, error }] = useMutation<
    removeJob,
    removeJobVariables
  >(DELETE_JOB, { variables: { id } });

  if (error) {
    message.error(error.message);
  }

  return (
    <Button loading={loading} onClick={() => commit()}>
      delete
    </Button>
  );
};

export default DeleteJob
