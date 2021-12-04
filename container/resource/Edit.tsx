import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Result from "antd/lib/result";
import Edit from "../../components/resource/Edit";
import { getDataEdit } from "./__generated__/getDataEdit";

const EDIT_RESOURCE = gql`
  query getDataEdit($wing: String!) {
    getResourcesByWing(wing: $wing) {
      id
      wing
      title
      category
      objects {
        id
        name
        category
        link
      }
    }
  }
`;

const EditContainer: React.FC<{ wing: string }> = ({ wing }) => {
  const [treeItems, setTreeItems] = useState([]);
  const { loading, error, data } = useQuery<getDataEdit>(EDIT_RESOURCE, {
    variables: { wing: wing },
  });
  if (loading) return <Loader />;
  if (error) {
    return (
      <Result status="error" title={error.name} subTitle={error.message} />
    );
  }
  return <Edit wing={wing} data={data?.getResourcesByWing || []} />;
};

export default EditContainer;
