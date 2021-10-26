import { ApolloProvider } from "@apollo/client";
import { CareerClient } from "../graphql/clients";

import AddNotification from "../components/career/AddNotification";
import Notifications from "../container/career/Notifications";
import AddJob from "../components/career/AddJob";
import Jobs from "../container/career/Jobs";
import React from "react";

const getCurrentComponent = (key: string) => (
  <ApolloProvider client={CareerClient}>
    {
      {
        "11": <AddNotification />,
        "12": <Notifications />,
        "21": <AddJob />,
        "22": <Jobs />,
      }[key]
    }
  </ApolloProvider>
);

export default getCurrentComponent;
