import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Result from "antd/lib/result";
import Edit from "../../components/resource/Edit";
import { getDataEdit } from "./__generated__/getDataEdit";
import { secured } from "react-abac";
import { permissions } from "../../pkg/abac";
import AccessDenied from "../../components/resource/Denied";

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

interface props {
  wing: string;
}

const EditContainer: React.FC<{ wing: string }> = ({ wing }) => {
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
// export default secured({
//   permissions: permissions.DELETE_BUTTON,
//   mapPropsToData: (props: props) => props.wing,
//   noAccess: () => {
//     return <AccessDenied />;
//   },
// })(EditContainer);
