import { gql, useQuery } from "@apollo/client";
import { getData } from "./__generated__/getData";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Result from "antd/lib/result";
import Delete from "../../components/resource/Delete";

const DELETE_RESOURCE = gql`
  query getData($wing: String!) {
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

const DeleteContainer: React.FC<{ wing: string }> = ({ wing }) => {
  const { loading, error, data } = useQuery<getData>(DELETE_RESOURCE, {
    variables: { wing: wing },
  });
  if (loading) return <Loader />;
  if (error) {
    return (
      <Result status="error" title={error.name} subTitle={error.message} />
    );
  }
  return <Delete wing={wing} data={data?.getResourcesByWing || []} />;
};

export default DeleteContainer;
