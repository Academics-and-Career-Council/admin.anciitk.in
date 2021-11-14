import { GetWings, GetWings_getWings } from "./__generated__/GetWings";
import { gql, useQuery } from "@apollo/client";
import { Result } from "antd";

import Loader from "../../components/Loader";
import Navbar from "../../components/resource/Navbar";
import React from "react";

const GET_WINGS = gql`
  query GetWings {
    getWings {
      name
    }
  }
`;

const NavbarContainer: React.FC = () => {
  const { loading, error, data } = useQuery<GetWings>(GET_WINGS, {
    variables: {},
  });
  if (loading) return <Loader />;
  if (error) {
    console.log(error);
    return (
      <Result status="error" title={error.name} subTitle={error.message} />
    );
  }
  return <Navbar wings={data?.getWings || []} />;
};

export default NavbarContainer;
