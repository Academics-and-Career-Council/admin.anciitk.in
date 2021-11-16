/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: getTitles
// ====================================================


export interface getTitles_getResourcesByWing {
  __typename: "Resources";
  title: string;
}

export interface getTitles {
  getResourcesByWing: getTitles_getResourcesByWing[];
}

export interface getTitlesVariables {
  wing: string;
}
