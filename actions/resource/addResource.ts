import { AddObject, AddObjectVariables } from "./__generated__/AddObject";
import { gql } from "@apollo/client";
import { ResourceClient } from "../../graphql/clients";

const ADD_RESOURCE = gql`
  mutation AddObject($data: NewObject!, $heading: String!) {
    addObject(newObject: $data, heading: $heading) {
      id
      name
      category
      link
    }
  }
`;

const commit = async (data: AddObjectVariables, heading: string) => {
  return ResourceClient.mutate<AddObject, AddObjectVariables>({
    mutation: ADD_RESOURCE,
    variables: { data, heading },
    refetchQueries: ["GetDataEdit"],
  });
};

export default commit;
