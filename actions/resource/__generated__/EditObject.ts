/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NewObject, Category } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: EditObject
// ====================================================

export interface EditObject_editObject {
  __typename: "Object";
  id: string;
  name: string;
  category: Category;
  link: string;
}

export interface EditObject {
  editObject: EditObject_editObject;
}

export interface EditObjectVariables {
  data: NewObject;
  id: string;
}
