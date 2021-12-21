import { ApolloProvider } from "@apollo/client";
import { CareerClient } from "../graphql/clients";

import AddNotification from "../components/career/AddNotification";
import Notifications from "../container/career/Notifications";
import AddJob from "../components/career/AddJob";
import JobsContainer from "../container/career/Jobs";
import Jobs from "../components/career/Jobs";
import EditJob from "../container/career/EditJob";
import EditNotification from "../container/career/EditNotification";
import React from "react";
import Applications from "../components/career/Applications";
import ViewApplications from "../container/career/ViewApplications";

const getCurrentComponent = (mode: string, id: string | undefined) => {
  return (
    <ApolloProvider client={CareerClient}>
      {
        {
          invalid: <div></div>,
          addnotification: <AddNotification />,
          editnotification: id ? (
            <EditNotification id={id} />
          ) : (
            <Notifications />
          ),
          addjob: <AddJob />,
          editjob: id ? <EditJob id={id} /> : <JobsContainer Children={Jobs} />,
          applications: id ? (
            <ViewApplications jobID={id} />
          ) : (
            <JobsContainer Children={Applications} />
          ),
        }[mode]
      }
    </ApolloProvider>
  );
};

export default getCurrentComponent;
