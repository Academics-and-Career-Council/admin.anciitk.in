import Add from "../components/resource/Add";
import Edit from "../components/resource/Edit";
import Delete from "../components/resource/Delete";

const getCurrentComponent = (
  wing: string,
  mode: string,
  id: string | undefined
) => {
  switch (mode) {
    case "add":
      return <Add wing={wing} />;
    case "edit":
      return <Edit wing={wing} />;
    case "delete":
      return <Delete wing={wing} />;
    default:
      return <Add wing="career development" />;;
  }
};

export default getCurrentComponent;
