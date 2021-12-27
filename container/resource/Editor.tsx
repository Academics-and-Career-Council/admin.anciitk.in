import { gql, useQuery } from "@apollo/client";
import React from "react";
import Loader from "../../components/Loader";
import Result from "antd/lib/result";
import Editor from "../../components/resource/ResourceForm";
import { getDocumentEdit } from "./__generated__/getDocumentEdit";
import { editContainerProps } from "../../pkg/propsInterfaces";

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

const EditorContainer: React.FC<editContainerProps> = ({ id }) => {
  const { loading, error, data } = useQuery<getDocumentEdit>(EDIT_DOCUMENT, {
    variables: { id: id },
    nextFetchPolicy: "network-only",
  });
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <Result status="error" title={error.name} subTitle={error.message} />
    );
  }

  return <Editor data={data?.getDocument} action="edit" wing="invalid" />;
};

export default EditorContainer;
