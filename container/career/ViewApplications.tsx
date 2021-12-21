import {
  GetApplications,
  GetApplicationsVariables,
} from "./__generated__/GetApplications";
import { Result } from "antd";
import Loader from "../../components/Loader";
import { gql, useQuery } from "@apollo/client";
import ViewApplications from "../../components/career/ViewApplications";

const GET_APPLICATIONS = gql`
  query GetApplications($jobID: ID!) {
    getAdminApplications(jobID: $jobID) {
      id
      student {
        name
        rollno
      }
      status
      resume
    }
  }
`;

const ViewApplicationsContainer: React.FC<GetApplicationsVariables> = ({
  jobID,
}) => {
  const { loading, error, data } = useQuery<
    GetApplications,
    GetApplicationsVariables
  >(GET_APPLICATIONS, {
    variables: { jobID },
  });

  if(loading) return <Loader />
  if(error) return (
    <Result status='error' title={error.name} subTitle={error.message} />
  )
  // @ts-ignore
  return <ViewApplications applications={data?.getAdminApplications || []} jobID={jobID} />;
};

export default ViewApplicationsContainer;
