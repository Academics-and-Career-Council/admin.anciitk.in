/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { NewObject, Category } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddObject
// ====================================================


export interface AddObject_addObject {
  __typename: "Object";
  id: string;
  name: string;
  category: Category;
  link: string;
}

export interface AddObject {
  addObject: AddObject_addObject;
}

export interface AddObjectVariables {
  data: NewObject;
  heading: string;
}
