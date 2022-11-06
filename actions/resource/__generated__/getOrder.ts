/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getOrder
// ====================================================

export interface getOrder_getResourcesByWing {
  __typename: "Resources";
  order: number;
}

export interface getOrder {
  getResourcesByWing: getOrder_getResourcesByWing[];
}

export interface getOrderVariables {
  wing: string;
}
