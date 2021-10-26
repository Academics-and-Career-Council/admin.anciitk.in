import { HideJob, HideJobVariables } from "./__generated__/HideJob";
import { Button, message } from "antd";
import { gql, useMutation } from "@apollo/client";

const HIDE_JOB = gql`
  mutation HideJob($id: ID!) {
    hideJob(id: $id) {
      id
      visibility
    }
  }
`;

const HideJobButton: React.FC<HideJobVariables> = ({ id }) => {
  const [commit, { loading, error, data }] = useMutation<HideJob>(HIDE_JOB, {
    variables: { id },
  });
  console.log(id)
  if (error) {
    message.error(error.message);
  }
  
  return (
    <Button loading={loading} onClick={() => commit()}>
      Hide
    </Button>
  );
};

export default HideJobButton