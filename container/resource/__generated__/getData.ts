/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { Type, Category } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getData
// ====================================================


export interface getData_getResourcesByWing_objects {
  __typename: "Object";
  id: string;
  name: string;
  category: Category;
  link: string;
}

export interface getData_getResourcesByWing {
  __typename: "Resources";
  id: string;
  wing: string;
  title: string;
  category: Type;
  objects: getData_getResourcesByWing_objects[];
}

export interface getData {
  getResourcesByWing: getData_getResourcesByWing[];
}

export interface getDataVariables {
  wing: string;
}
