/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ToggleJob
// ====================================================

export interface ToggleJob_toggleJob {
  __typename: "AdminJob";
  id: string;
  visibility: boolean;
}

export interface ToggleJob {
  toggleJob: ToggleJob_toggleJob;
}

export interface ToggleJobVariables {
  id: string;
}
