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
    return (
      <Result
        status="error"
        title={<span style={{ color: "white" }}>{error.name}</span>}
        subTitle={<span style={{ color: "white" }}>{error.message}</span>}
      />
    );
  }
  return <Navbar wings={data?.getWings || []} />;
};

export default NavbarContainer;
