import { gql} from "@apollo/client";

export const ADD_RESOURCE = gql`
  mutation AddObject($data: NewObject!, $heading: String!, $exists: Boolean!) {
    addObject(newObject: $data, heading: $heading, exists: $exists) {
      id
      name
      category
      link
    }
  }
`;

// const commit = async (dataa: NewObject, heading: string) => {
//   return ResourceClient.mutate<AddObject, NewObject>({
//     mutation: ADD_RESOURCE,
//     variables: { ...data, heading },
//     refetchQueries: ["GetDataEdit"],
//   });
// };

