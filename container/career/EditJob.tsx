import { GetAdminJob, GetAdminJobVariables } from "./__generated__/GetAdminJob";
import { gql, useQuery } from "@apollo/client";
import { Result } from "antd";
import Loader from "../../components/Loader";
import EditJob from "../../components/career/EditJob";

const GET_ADMIN_JOB = gql`
  query GetAdminJob($id: ID!) {
    getAdminJob(id: $id) {
      id
      name
      stipend
      deadline
      designation
      jd
      description
      nature_of_business
      location
      eligibility
      shortlist
      test
    }
  }
`;

const EditJobContainer: React.FC<GetAdminJobVariables> = ({ id }) => {
  const { loading, error, data } = useQuery<GetAdminJob, GetAdminJobVariables>(
    GET_ADMIN_JOB,
    {
      variables: { id },
    }
  );

  if (loading) return <Loader />;
  if (error)
    return (
      <Result status="error" title={error.name} subTitle={error.message} />
    );
  return (
    // @ts-ignore
    <EditJob data={data?.getAdminJob} />
  );
};

export default EditJobContainer;
