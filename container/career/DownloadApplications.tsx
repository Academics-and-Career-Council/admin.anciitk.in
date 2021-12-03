import {
  DownloadApplications,
  DownloadApplicationsVariables,
} from "./__generated__/DownloadApplications";
import { Button, message } from "antd";
import { gql } from "@apollo/client";
import { CareerClient } from "../../graphql/clients";
import { useState } from "react";
import { CSVDownload } from "react-csv";

const DOWNLOAD_APPLICATIONS = gql`
  query DownloadApplications($jobID: ID!) {
    downloadApplications(jobID: $jobID) {
      applications
    }
  }
`;

const DownloadButton: React.FC<DownloadApplicationsVariables> = ({ jobID }) => {
  const [loading, setLoading] = useState(false);
  const [applications, setApplications] = useState("");

  return (
    <Button
      loading={loading}
      type="primary"
      onClick={() => {
        setLoading(true);
        CareerClient.query<DownloadApplications, DownloadApplicationsVariables>(
          {
            query: DOWNLOAD_APPLICATIONS,
            variables: { jobID },
          }
        )
          .then(({ data }) => {
            setLoading(false);
            setApplications(data.downloadApplications.applications);
            setTimeout(() => setApplications(""), 3000);
          })
          .catch((err) => {
            message.error(err.message);
            console.log(err);
          });
      }}
    >
      Download Applications
      {applications && (
        <CSVDownload
          data={applications}
          target="_blank"
          filename="applications.csv"
        />
      )}
    </Button>
  );
};

export default DownloadButton;
