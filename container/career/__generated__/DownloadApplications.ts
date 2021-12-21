/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DownloadApplications
// ====================================================

export interface DownloadApplications_downloadApplications {
  __typename: "ApplicationString";
  applications: string;
}

export interface DownloadApplications {
  downloadApplications: DownloadApplications_downloadApplications;
}

export interface DownloadApplicationsVariables {
  jobID: string;
}
