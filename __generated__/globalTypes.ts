/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


//==============================================================
// START Enums and Input Objects
//==============================================================


export enum Category {
  GDRIVE = "GDRIVE",
  PDF = "PDF",
  YOUTUBE = "YOUTUBE",
  ZOOM = "ZOOM",
}

export enum Type {
  DOCUMENT = "DOCUMENT",
  VIDEO = "VIDEO",
}

export interface NewObject {
  name: string;
  category: Category;
  link: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

