/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { JobData } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateJob
// ====================================================

export interface UpdateJob_updateJob {
  __typename: "AdminJob";
  id: string;
  name: string;
  type: string;
  designation: string;
  deadline: string;
  stipend: string;
  visibility: boolean;
}

export interface UpdateJob {
  updateJob: UpdateJob_updateJob;
}

export interface UpdateJobVariables {
  id: string;
  data: JobData;
}
