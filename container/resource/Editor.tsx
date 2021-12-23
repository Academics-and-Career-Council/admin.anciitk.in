import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Result from "antd/lib/result";
import Editor from "../../components/resource/ResourceForm";
import { getDocumentEdit } from "./__generated__/getDocumentEdit";
import { secured } from "react-abac";
import { permissions } from "../../pkg/abac";
import AccessDenied from "../../components/resource/Denied"
import EditContainer from "./Edit";

const EDIT_DOCUMENT = gql`
  query getDocumentEdit($id: String!) {
    getDocument(id: $id) {
      id
      name
      category
      link
    }
  }
`;

interface props {
  id: string
}

const EditorContainer: React.FC<props> = ({id}) => {
  const { loading, error, data } = useQuery<getDocumentEdit>(EDIT_DOCUMENT, {
    variables: { id: id },
    nextFetchPolicy:"network-only"
  });
  if (loading) {
    return <Loader />
  }
  if (error) {
    return (
      <Result status="error" title={error.name} subTitle={error.message} />
    );
  }

  return <Editor data={data?.getDocument} action="edit" wing="invalid"/>
};

// export default EditorContainer;
export default secured({
  permissions: permissions.EDIT_BUTTON,
  mapPropsToData: (props:props)=> props.id,
  noAccess: () => {
    return <AccessDenied />;
  },
})(EditorContainer);
