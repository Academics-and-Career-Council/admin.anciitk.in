import { Role } from "@anciitk/xenon-js";
import { Rules } from "react-abac";

interface User {
  uuid: string;
  roles: Role[];
  permissions: permissions[];
}

export enum permissions {
  VIEW_PAGE = "VIEW_PAGE",
  ADD_BUTTON = "ADD_BUTTON",
  EDIT_BUTTON = "EDIT_BUTTON",
  DELETE_BUTTON = "DELETE_BUTTON",
}

export const rules: Rules<Role, permissions, User> = {
  [Role.Admin]: {
    [permissions.VIEW_PAGE]: true,
    [permissions.ADD_BUTTON]: true,
    [permissions.EDIT_BUTTON]: true,
    [permissions.DELETE_BUTTON]: true,
  },
  [Role.Manager]: {
    [permissions.VIEW_PAGE]: true,
    [permissions.ADD_BUTTON]: true,
    [permissions.EDIT_BUTTON]: true,
    [permissions.DELETE_BUTTON]: false,
  },
  [Role.Secretary]: {
    [permissions.VIEW_PAGE]: true,
    [permissions.ADD_BUTTON]: true,
    [permissions.EDIT_BUTTON]: true,
    [permissions.DELETE_BUTTON]: false,
  },
  [Role.Student]: {
    [permissions.VIEW_PAGE]: false,
    [permissions.ADD_BUTTON]: false,
    [permissions.EDIT_BUTTON]: false,
    [permissions.DELETE_BUTTON]: false,
  },
};
