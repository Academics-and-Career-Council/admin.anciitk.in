import {
  UpdateJob,
  UpdateJobVariables,
} from "./__generated__/UpdateJob";
import { gql } from "@apollo/client";
import { CareerClient } from "../../graphql/clients";

const UPDATE_JOB = gql`
  mutation UpdateJob($id: ID!, $data: JobData!) {
    updateJob(id: $id, data: $data) {
      id,
      name,
      designation,
      deadline,
      stipend,
      visibility
    }
  }
`;

const commit = async ({ id, data }: UpdateJobVariables) => {
  return await CareerClient.mutate<
    UpdateJob,
    UpdateJobVariables
  >({
    mutation: UPDATE_JOB,
    variables: {
      id,
      data,
    },
  });
};

export default commit