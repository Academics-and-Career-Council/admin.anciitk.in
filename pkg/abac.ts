import { Role } from "@anciitk/xenon-js";
import { Rules } from "react-abac";

interface User {
  uuid: string;
  roles: Role[];
  permissions: permissions[];
}
export enum permissions {
  VIEW_BUTTON = "VIEW_BUTTON",
  VIEW_ADMIN_PAGE = "VIEW_ADMIN_PAGE",
  VIEW_CAREER_PAGE = "VIEW_CAREER_PAGE",
  DELETE_JOB = "DELETE_JOB",
  DOWNLOAD_APPLICATIONS = "DOWNLOAD_APPLICATIONS",
}
export const rules: Rules<Role, permissions, User> = {
  [Role.Admin]: {
    [permissions.VIEW_BUTTON]: true,
    [permissions.VIEW_ADMIN_PAGE]: true,
    [permissions.VIEW_CAREER_PAGE]: true,
    [permissions.DELETE_JOB]: true,
    [permissions.DOWNLOAD_APPLICATIONS]: true,
  },
  [Role.Manager]: {
    [permissions.VIEW_ADMIN_PAGE]: true,
    [permissions.DELETE_JOB]: true,
    [permissions.DOWNLOAD_APPLICATIONS]: true,
  },
  [Role.Secretary]: {
    [permissions.VIEW_ADMIN_PAGE]: true,
  },
  [Role.Student]: {
    [permissions.VIEW_ADMIN_PAGE]: false,
    [permissions.VIEW_BUTTON]: false,
  },
};
