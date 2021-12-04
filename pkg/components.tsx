import Add from "../components/resource/Add";
import Edit from "../container/resource/Edit";
import DeleteContainer from "../container/resource/Delete";
import InvalidWing from "../components/resource/Invalid";
import EditorContainer from "../container/resource/Editor";

const getCurrentComponent = (
  wing: string,
  mode: string,
  id: string | undefined
) => {
  if (id) {
    switch (mode) {
      case "edit":
        return <EditorContainer id={id} />;
      default:
        return <InvalidWing />;
    }
  }
  switch (mode) {
    case "add":
      return <Add wing={wing} />;
    case "edit":
      return <Edit wing={wing} />;
    case "delete":
      return <DeleteContainer wing={wing} />;
    default:
      return <InvalidWing />;
  }
};

export default getCurrentComponent;
