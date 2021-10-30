import { ApolloProvider } from "@apollo/client";
import { CareerClient } from "../graphql/clients";

import AddNotification from "../components/career/AddNotification";
import Notifications from "../container/career/Notifications";
import AddJob from "../components/career/AddJob";
import Jobs from "../container/career/Jobs";
import EditJob from "../container/career/EditJob";
import EditNotification from "../container/career/EditNotification";
import React from "react";

const getCurrentComponent = (mode: string, id: string | undefined) => {
  return (
    <ApolloProvider client={CareerClient}>
      {
        {
          addnotification: <AddNotification />,
          editnotification: id ? (
            <EditNotification id={id} />
          ) : (
            <Notifications />
          ),
          addjob: <AddJob />,
          editjob: id ? <EditJob id={id} /> : <Jobs />,
        }[mode]
      }
    </ApolloProvider>
  );
};

export default getCurrentComponent;
