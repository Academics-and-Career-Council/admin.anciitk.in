import { AddJob, AddJobVariables } from "./__generated__/AddJob";
import { gql } from "@apollo/client";
import { CareerClient } from "../../graphql/clients";

const ADD_JOB = gql`
  mutation AddJob($data: JobData!) {
    addJob(data: $data) {
      id
      name
      designation
      deadline
      stipend
      visibility
    }
  }
`;

const commit = async ({ data }: AddJobVariables) => {
  return await CareerClient.mutate<
    AddJob,
    AddJobVariables
  >({
    mutation: ADD_JOB,
    variables: { data },
    refetchQueries: ['GetAdminJobs']
  });
};

export default commit;
