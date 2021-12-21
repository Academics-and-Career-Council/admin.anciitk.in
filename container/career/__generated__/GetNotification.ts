/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetNotification
// ====================================================

export interface GetNotification_getNotification {
  __typename: "Notification";
  id: string;
  heading: string;
  data: string;
  modified: string;
}

export interface GetNotification {
  getNotification: GetNotification_getNotification;
}

export interface GetNotificationVariables {
  id: string;
}
