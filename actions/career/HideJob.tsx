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
  const [commit, { loading, error }] = useMutation<HideJob>(HIDE_JOB, {
    variables: { id },
  });

  return (
    <Button
      loading={loading}
      onClick={() =>
        commit()
          .then(() =>
            message.success(
              "Job successfully hided from users with all the applications associated"
            )
          )
          .catch((err) => {
            message.error(err.message);
            console.error(err);
          })
      }
    >
      Hide
    </Button>
  );
};

export default HideJobButton;
