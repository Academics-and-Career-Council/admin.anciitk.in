/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NotificationData } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddNotification
// ====================================================

export interface AddNotification_addNotification {
  __typename: "Notification";
  id: string;
  heading: string;
  data: string;
}

export interface AddNotification {
  addNotification: AddNotification_addNotification;
}

export interface AddNotificationVariables {
  data: NotificationData;
}
