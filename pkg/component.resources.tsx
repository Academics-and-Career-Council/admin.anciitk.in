import Add from "../components/resource/Add";
import Edit from "../container/resource/Edit";
import DeleteContainer from "../container/resource/Delete";
import InvalidWing from "../components/resource/Invalid";
import EditorContainer from "../container/resource/Editor";
import { secured } from "react-abac";
import { permissions } from "./abac.resources";
import AccessDenied from "../components/resource/Denied";
import { wingProps, editContainerProps } from "./propsInterfaces";

const getCurrentComponent = (
  wing: string,
  mode: string,
  id: string | undefined
) => {
  if (id) {
    switch (mode) {
      case "edit":
        return <EditorContainer id={id} />;
        // const EditSecured = secured({
        // permissions: permissions.EDIT_BUTTON,
        // mapPropsToData: (props: editContainerProps) => props.id,
        //   noAccess: () => {
        //     return <AccessDenied />;
        //   },
        // })(EditorContainer);
        // return <EditSecured id={id} />;
      default:
        return <InvalidWing />;
        // const InvalidSecured = secured({
        // permissions: permissions.VIEW_PAGE,
        // mapPropsToData: (props) => props,
        //   noAccess: () => {
        //     return <AccessDenied />;
        //   },
        // })(InvalidWing);
        // return <InvalidSecured />;
    }
  }
  switch (mode) {
    case "add":
      return <Add wing={wing} />;
      // console.log(wing)
      // const AddSecure = secured({
      // permissions: permissions.ADD_BUTTON,
      // mapPropsToData: (props: wingProps) => {
      //     props.wing;
      //   },
      //   noAccess: () => {
      //     return <AccessDenied />;
      //   },
      // })(Add);
      // return <AddSecure wing={wing} />;
    case "edit":
      return <Edit wing={wing} />;
      // const EditSecured = secured({
      // permissions: permissions.EDIT_BUTTON,
      // mapPropsToData: (props: wingProps) => props.wing,
      //   noAccess: () => {
      //     return <AccessDenied />;
      //   },
      // })(Edit);
      // return <EditSecured wing={wing} />;
    case "delete":
      return <DeleteContainer wing={wing} />;
      // const DeleteSecured = secured({
      // permissions: permissions.DELETE_BUTTON,
      // mapPropsToData: (props: wingProps) => props.wing,
      //   noAccess: () => {
      //     return <AccessDenied />;
      //   },
      // })(DeleteContainer);
      // return <DeleteSecured wing={wing} />;
    // default:
      // const InvalidSecured = secured({
      // permissions: permissions.VIEW_PAGE,
      // mapPropsToData: (props) => props,
      //   noAccess: () => {
      //     return <AccessDenied />;
      //   },
      // })(InvalidWing);
      // return <InvalidSecured />;
  }
};

export default getCurrentComponent;
