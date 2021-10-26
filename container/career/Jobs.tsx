import { GetAdminJobs } from "./__generated__/GetAdminJobs"
import { gql, useQuery } from "@apollo/client"
import { Result } from "antd"

import Loader from "../../components/Loader"
import Jobs from "../../components/career/Jobs"

const GET_ADMIN_JOBS = gql`
  query GetAdminJobs{
    getAdminJobs{
      id,
      name,
      designation,
      deadline,
      stipend,
      visibility
    }
  }
`

const JobsContainer: React.FC = () => {
  const {loading, error, data} = useQuery<GetAdminJobs>(GET_ADMIN_JOBS, {variables: {}})
  if(loading) return <Loader />
  if(error) return (
    <Result status='error' title={error.name} subTitle={error.message} />
  )
  return (
    // @ts-ignore
    <Jobs jobs={data?.getAdminJobs || []}/> 
  )
}

export default JobsContainer