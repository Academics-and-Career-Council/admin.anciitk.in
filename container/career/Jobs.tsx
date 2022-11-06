import { GetAdminJobs, GetAdminJobs_getAdminJobs } from "./__generated__/GetAdminJobs"
import { gql, useQuery } from "@apollo/client"
import { Result } from "antd"

import Loader from "../../components/Loader"
import React from "react"

const GET_ADMIN_JOBS = gql`
  query GetAdminJobs{
    getAdminJobs{
      id,
      name,
      type,
      designation,
      deadline,
      stipend,
      visibility
    }
  }
`

const JobsContainer: React.FC<{Children: React.FC<{jobs: GetAdminJobs_getAdminJobs[]}>}> = ({Children}) => {
  const {loading, error, data} = useQuery<GetAdminJobs>(GET_ADMIN_JOBS, {variables: {}})
  if(loading) return <Loader />
  if(error) return (
    <Result status='error' title={error.name} subTitle={error.message} />
  )
  return (
    // @ts-ignore
    <Children jobs={data?.getAdminJobs || []}/> 
  )
}

export default JobsContainer