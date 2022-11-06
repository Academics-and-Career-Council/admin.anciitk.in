/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Category } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getDocumentEdit
// ====================================================

export interface getDocumentEdit_getDocument {
  __typename: "Object";
  id: string;
  name: string;
  category: Category;
  link: string;
}

export interface getDocumentEdit {
  getDocument: getDocumentEdit_getDocument;
}

export interface getDocumentEditVariables {
  id: string;
}
