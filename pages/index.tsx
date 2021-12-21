import type { NextPage } from "next";
import React from "react";
import WithAuth from "../components/WithAuth";

const Home: NextPage = () => {
  return <div>Index Page</div>;
};

export default WithAuth(Home);
