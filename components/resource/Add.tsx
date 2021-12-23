import React, { useEffect, useState } from "react";
import ResourceForm from "./ResourceForm";
import { secured } from "react-abac";
import { permissions } from "../../pkg/abac";
import AccessDenied from "./Denied";

interface props {
  wing: string;
}

interface props {
  wing: string;
}

const Add: React.FC<props> = ({ wing }) => {
  const data = {
    headingDrop: undefined,
    headingInput: "",
    name: "",
    url: "",
  };
  return <ResourceForm wing={wing} action="add" data={data} />;
};

// export default Add;
export default secured({
  permissions: permissions.ADD_BUTTON,
  mapPropsToData: (props:props) => props.wing,
  noAccess: () => {
    return <AccessDenied />;
  },
})(Add);
