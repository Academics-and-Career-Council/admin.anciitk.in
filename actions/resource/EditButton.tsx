import { gql} from "@apollo/client";
import { ResourceClient } from "../../graphql/clients";

export const EDIT_RESOURCE = gql`
  mutation EditObject($data: NewObject!, $id: String!) {
    editObject(data: $data, id: $id) {
      id
      name
      category
      link
    }
  }
`;

const commit = async (data:any) => {
  return await ResourceClient.mutate({
    mutation: EDIT_RESOURCE, 
    variables: data,
    refetchQueries: "active"
  })
}

export default commit;