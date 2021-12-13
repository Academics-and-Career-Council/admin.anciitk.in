import { gql} from "@apollo/client";

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