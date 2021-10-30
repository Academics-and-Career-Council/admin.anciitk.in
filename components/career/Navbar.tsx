import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProfileOutlined from "@ant-design/icons/ProfileOutlined";
import NotificationOutlined from "@ant-design/icons/NotificationOutlined";
import AppStoreOutlined from "@ant-design/icons/AppstoreOutlined";
import UserOutlined from "@ant-design/icons/UserOutlined";
import PlusCircleOutlined from "@ant-design/icons/PlusCircleOutlined";
import EditOutlined from "@ant-design/icons/EditOutlined";

const { Item, SubMenu } = Menu;

const getMode = (key: string) => {
  let mode = "";
  switch (key) {
    case "11":
      mode = "addnotification";
      break;
    case "12":
      mode = "editnotification";
      break;
    case "21":
      mode = "addjob";
      break;
    case "22":
      mode = "editjob";
      break;
    default:
      mode = "notvalid";
      break;
  }

  return mode;
};

const paths: { [name: string]: string } = {
  addnotification: "11",
  editnotification: "12",
  addjob: "21",
  editjob: "22",
};

const Navbar: React.FC = () => {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState("");

  useEffect(() => {
    const mode = window.location.href
      .trim()
      .split("?")[1]
      .split("&")[0]
      .split("=")[1];
    setSelectedKey(mode);
  }, []);
  const itemStyle = { display: "flex", alignItems: "center" };

  return (
    <Menu
      theme="dark"
      mode="inline"
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        backgroundColor: "black",
      }}
      selectedKeys={[selectedKey]}
      onSelect={(info) =>
        setSelectedKey(() => {
          const mode = getMode(info.key);
          router.push(`/career?mode=${mode}`, undefined, {
            shallow: true,
          });
          return info.key;
        })
      }
    >
      <SubMenu key="1" icon={<NotificationOutlined />} title="Notifications">
        <Item key="11" icon={<PlusCircleOutlined />}>
          Add Notification
        </Item>
        <Item key="12" icon={<EditOutlined />}>
          Edit Notification
        </Item>
      </SubMenu>
      <SubMenu key="2" icon={<ProfileOutlined />} title="Jobs">
        <Item key="21" icon={<PlusCircleOutlined />}>
          Add Job
        </Item>
        <Item key="22" icon={<EditOutlined />}>
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

export default Navbar;
