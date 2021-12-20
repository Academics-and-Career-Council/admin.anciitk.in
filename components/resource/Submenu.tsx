import TagsOutlined from "@ant-design/icons/TagsOutlined";
import PlusCircleOutlined from "@ant-design/icons/PlusCircleOutlined";
import EditOutlined from "@ant-design/icons/EditOutlined";
import DeleteOutlined from "@ant-design/icons/DeleteOutlined";
import { Menu } from "antd";
import { secured } from "react-abac";
import AccessDenied from "./Denied";
import { permissions } from "../../pkg/abac";
const { Item, SubMenu } = Menu;

interface props {
  title: string;
  number: string;
  // Submenu: (props: SubMenuProps) => JSX.Element;
  // Item: typeof MenuItem
}

const Submenu: React.FC<props> = ({ title, number}) => {
  const { Item, SubMenu } = Menu;
  const itemStyle = { display: "flex", alignItems: "center" };
  return (
    <>
      <SubMenu key={number} icon={<TagsOutlined />} title={title}>
        <Item key={`${number}1`} icon={<PlusCircleOutlined />}>
          Add Resource
        </Item>
        <Item key={`${number}2`} icon={<EditOutlined />}>
          Edit Resources
        </Item>
        <Item key={`${number}3`} icon={<DeleteOutlined />}>
          Delete Resources
        </Item>
      </SubMenu>
    </>
  );
};

export default Submenu;

// export default secured({
//   permissions: permissions.VIEW_PAGE,
//   mapPropsToData: (props) => props,
//   noAccess: () => {
//     return <AccessDenied />
//   },
// })(Submenu);
