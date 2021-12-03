import { ToggleJob, ToggleJobVariables } from "./__generated__/ToggleJob";
import { Button, message } from "antd";
import { gql, useMutation } from "@apollo/client";

const TOGGLE_JOB = gql`
  mutation ToggleJob($id: ID!) {
    toggleJob(id: $id) {
      id
      visibility
    }
  }
`;

const ToggleJobButton: React.FC<{ id: string; text: string }> = ({
  id,
  text,
}) => {
  const [commit, { loading, error }] = useMutation<ToggleJob>(TOGGLE_JOB, {
    variables: { id },
  });

  return (
    <Button
      loading={loading}
      onClick={() =>
        commit()
          .then(({ data }) =>
            message.success(
              `Job successfully ${
                data?.toggleJob.visibility ? "unhided" : "hided"
              } from users with all the applications associated`
            )
          )
          .catch((err) => {
            message.error(err.message);
            console.error(err);
          })
      }
    >
      {text}
    </Button>
  );
};

export default ToggleJobButton;
