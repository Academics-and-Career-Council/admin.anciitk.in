import React from "react";
import ResourceForm from "./ResourceForm";
import { wingProps } from "../../pkg/propsInterfaces";

const Add: React.FC<wingProps> = ({ wing }) => {
  const data = {
    headingDrop: undefined,
    headingInput: "",
    name: "",
    url: "",
  };
  console.log(wing);
  return <ResourceForm wing={wing} action="add" data={data} />;
};

export default Add;
