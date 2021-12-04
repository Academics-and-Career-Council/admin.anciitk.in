import { gql } from "@apollo/client"

const ADD_RESOURCE = gql`
mutation AddResource($data:ObjectData!) {
  addObject(data:$data){
    heading
    id
    name
    category
    link
  }
}`

