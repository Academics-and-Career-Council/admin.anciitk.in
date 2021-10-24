import { Menu } from "antd";
import ProfileOutlined from "@ant-design/icons/ProfileOutlined";
import NotificationOutlined from "@ant-design/icons/NotificationOutlined";
import AppStoreOutlined from "@ant-design/icons/AppstoreOutlined";
import UserOutlined from "@ant-design/icons/UserOutlined";
import PlusCircleOutlined from "@ant-design/icons/PlusCircleOutlined";
import EditOutlined from "@ant-design/icons/EditOutlined";
import { Dispatch, SetStateAction } from "react";

const { Item, SubMenu } = Menu;

type Props = {
  selectedKey: string
  setSelectedKey: Dispatch<SetStateAction<string>>
}

const Navbar: React.FC<Props> = ({selectedKey, setSelectedKey}) => {
  const itemStyle = { display: "flex", alignItems: "center" };
  return (
    <Menu
      theme="dark"
      mode="inline"
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        backgroundColor: "black"
      }}
      selectedKeys={[selectedKey]}
      onSelect={(info) => setSelectedKey(info.key)}
    >
      <SubMenu key="1" icon={<NotificationOutlined />} title="Notifications">
        <Item key='11' icon={<PlusCircleOutlined />}>
          Add Notification
        </Item>
        <Item key='12' icon={<EditOutlined />}>
          Edit Notification
        </Item>
      </SubMenu>
      <SubMenu key="2" icon={<ProfileOutlined />} title="Jobs">
        <Item key='21' icon={<PlusCircleOutlined />}>
          Add Job
        </Item>
        <Item key='22' icon={<EditOutlined />}>
          Edit Job
        </Item>
      </SubMenu>
      <Item key="3" icon={<AppStoreOutlined />} style={itemStyle}>
        Applications
      </Item>
      <Item key="4" icon={<UserOutlined />} style={itemStyle}>
        Users
      </Item>
    </Menu>
  );
};

export default Navbar
