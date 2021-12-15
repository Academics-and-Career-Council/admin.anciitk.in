import { gql} from "@apollo/client";
import { ResourceClient } from "../../graphql/clients";

export const DELETE_RESOURCE = gql`
  mutation deleteResource($headingId: String!, $objectId:String!) {
  deleteObjects(headingId:$headingId, objectId:$objectId )
}
`;

const commit = async (data:any) => {
  return await ResourceClient.mutate({
    mutation: DELETE_RESOURCE, 
    variables: data,
    refetchQueries: "active"
  })
}

export default commit;