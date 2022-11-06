/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Type, Category } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getDataEdit
// ====================================================

export interface getDataEdit_getResourcesByWing_objects {
  __typename: "Object";
  id: string;
  name: string;
  category: Category;
  link: string;
}

export interface getDataEdit_getResourcesByWing {
  __typename: "Resources";
  id: string;
  wing: string;
  title: string;
  category: Type;
  objects: getDataEdit_getResourcesByWing_objects[];
}

export interface getDataEdit {
  getResourcesByWing: getDataEdit_getResourcesByWing[];
}

export interface getDataEditVariables {
  wing: string;
}
