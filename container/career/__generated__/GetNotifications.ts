/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetNotifications
// ====================================================

export interface GetNotifications_getNotifications {
  __typename: "Notification";
  id: string;
  heading: string;
  data: string;
  modified: string;
}

export interface GetNotifications {
  getNotifications: (GetNotifications_getNotifications | null)[];
}
