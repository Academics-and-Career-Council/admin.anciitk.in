/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAdminJobs
// ====================================================

export interface GetAdminJobs_getAdminJobs {
  __typename: "AdminJob";
  id: string;
  name: string;
  designation: string;
  deadline: string;
  stipend: string;
  visibility: boolean;
}

export interface GetAdminJobs {
  getAdminJobs: (GetAdminJobs_getAdminJobs | null)[];
}
