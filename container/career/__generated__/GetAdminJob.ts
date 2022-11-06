/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAdminJob
// ====================================================

export interface GetAdminJob_getAdminJob {
  __typename: "AdminJob";
  id: string;
  name: string;
  type: string;
  stipend: string;
  deadline: string;
  designation: string;
  jd: string;
  description: string;
  nature_of_business: string;
  location: string;
  eligibility: string;
  shortlist: string;
  test: string;
  application_process: string;
}

export interface GetAdminJob {
  getAdminJob: GetAdminJob_getAdminJob | null;
}

export interface GetAdminJobVariables {
  id: string;
}
