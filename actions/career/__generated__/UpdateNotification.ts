/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NotificationData } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateNotification
// ====================================================

export interface UpdateNotification_updateNotification {
  __typename: "Notification";
  id: string;
  heading: string;
  data: string;
  modified: string;
}

export interface UpdateNotification {
  updateNotification: UpdateNotification_updateNotification;
}

export interface UpdateNotificationVariables {
  id: string;
  data: NotificationData;
}
