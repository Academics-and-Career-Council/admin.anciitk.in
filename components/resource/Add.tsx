import React, { useEffect, useState } from "react";
import ResourceForm from "./ResourceForm";

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

export default Add;
