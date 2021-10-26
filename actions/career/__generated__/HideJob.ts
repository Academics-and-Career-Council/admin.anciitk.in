/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: HideJob
// ====================================================

export interface HideJob_hideJob {
  __typename: "AdminJob";
  id: string;
  visibility: boolean;
}

export interface HideJob {
  hideJob: HideJob_hideJob;
}

export interface HideJobVariables {
  id: string;
}
