import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Result from "antd/lib/result";
import Editor from "../../components/resource/Editor";
import { getDocumentEdit } from "./__generated__/getDocumentEdit";

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

const EditorContainer: React.FC<{ id: string }> = ({ id }) => {
  console.log(typeof(id))
  const { loading, error, data } = useQuery<getDocumentEdit>(EDIT_DOCUMENT, {
    variables: { id: id },
  });
  if (loading) {
    return <Loader />
  }
  if (error) {
    return (
      <Result status="error" title={error.name} subTitle={error.message} />
    );
  }
  return <Editor data={data?.getDocument} />
};

export default EditorContainer;
