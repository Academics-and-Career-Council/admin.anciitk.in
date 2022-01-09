import { gql } from "@apollo/client";
import { ResourceClient } from "../../graphql/clients";

export const ADD_RESOURCE = gql`
  mutation AddObject(
    $data: NewObject!
    $heading: String!
    $exists: Boolean!
    $order: String!
    $wing:String!
  ) {
    addObject(
      newObject: $data
      heading: $heading
      exists: $exists
      order: $order
      wing:$wing
    ) {
      id
      name
      category
      link
    }
  }
`;

export const GET_ORDER = gql`
  query getOrder($wing: String!) {
    getResourcesByWing(wing: $wing) {
      order
    }
  }
`;

const commit = async (data:any) => {
  return await ResourceClient.mutate({
    mutation: ADD_RESOURCE, 
    variables: data,
    refetchQueries: "active"
  })
}

export default commit;
