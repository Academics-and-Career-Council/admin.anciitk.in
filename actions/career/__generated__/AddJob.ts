/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { JobData } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddJob
// ====================================================

export interface AddJob_addJob {
  __typename: "AdminJob";
  id: string;
  name: string;
  designation: string;
  deadline: string;
  stipend: string;
  visibility: boolean;
}

export interface AddJob {
  addJob: AddJob_addJob;
}

export interface AddJobVariables {
  data: JobData;
}
