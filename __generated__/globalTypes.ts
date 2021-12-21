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

export interface JobData {
  name: string;
  stipend: string;
  jd: string;
  deadline: string;
  nature_of_business: string;
  designation: string;
  location: string;
  description: string;
  eligibility: string;
  shortlist: string;
  test: string;
}

export interface NotificationData {
  heading: string;
  data: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

