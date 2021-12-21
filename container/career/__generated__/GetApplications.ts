/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetApplications
// ====================================================

export interface GetApplications_getAdminApplications_student {
  __typename: "UserData";
  name: string;
  rollno: number;
}

export interface GetApplications_getAdminApplications {
  __typename: "AdminApplication";
  id: string;
  student: GetApplications_getAdminApplications_student | null;
  status: string;
  resume: string;
}

export interface GetApplications {
  getAdminApplications: (GetApplications_getAdminApplications | null)[];
}

export interface GetApplicationsVariables {
  jobID: string;
}
