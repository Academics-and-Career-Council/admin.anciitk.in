import { GetWings_getWings } from "../../container/resource/__generated__/GetWings";
import { Menu } from "antd";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { recoilSessionState } from "../../pkg/recoilDeclarations";
import { useAbac } from "react-abac";
import {
  BookOutlined,
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import { toTitleCase } from "../../pkg/helpers";
import { permissions } from "../../pkg/abac";
const { Item, SubMenu } = Menu;

type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

const getMode = (key: string) => {
  let modeKey = key[1];
  let mode = "";
  switch (modeKey) {
    case "1":
      mode = "add";
      break;
    case "2":
      mode = "edit";
      break;
    case "3":
      mode = "delete";
      break;
    default:
      mode = "invalid";
      break;
  }
  return mode;
};

const getWing = (key: string, wingList: string[]) => {
  let wingKey = key[0];
  return wingList[parseInt(wingKey) - 1];
};

const Navbar: React.FC<{ wings: GetWings_getWings[] }> = ({ wings }) => {
  const router = useRouter();
  const { userHasPermissions } = useAbac();
  const wingList = wings.map((wing) => wing.name);
  const [selectedWing, setSelectedWing] = useState("invalid");
  const [selectedMode, setSelectedMode] = useState("invalid");
  const [session] = useRecoilState(recoilSessionState);
  const role = session?.user.role;

  useEffect(() => {
    const wing = router.query.wing;
    if (typeof wing === "string") {
      setSelectedWing(wing);
    }
    const mode = router.query.mode;
    if (typeof mode === "string") {
      setSelectedMode(mode);
    }
  }, [router.query]);
  const itemStyle = { display: "flex", alignItems: "center" };

  return (
    <>
      <Menu
        theme="dark"
        mode="inline"
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          backgroundColor: "black",
        }}
        selectedKeys={[selectedMode, selectedWing]}
        onSelect={(info) => {
          const mode = getMode(info.key);
          const wing = getWing(info.key, wingList);
          setSelectedMode(mode);
          setSelectedWing(wing);
          router.push(`/resource?wing=${wing}&mode=${mode}`, undefined, {
            shallow: true,
          });
        }}
      >
        {/* {wings.map((wing, index)=> <Submenu number={`${index}`} key={index} title={wing.name}/>)} */}
        {wings.map((wing, index) => (
          <SubMenu
            key={index}
            icon={<BookOutlined />}
            title={toTitleCase(wing.name)}
          >
            {userHasPermissions(permissions.ADD_BUTTON) ? (
              <Item key={`${index + 1}1`} icon={<PlusCircleOutlined />}>
                Add Resource
              </Item>
            ) : null}
            {userHasPermissions(permissions.EDIT_BUTTON) ? (
              <Item key={`${index + 1}2`} icon={<EditOutlined />}>
                Edit Resource
              </Item>
            ) : null}
            {userHasPermissions(permissions.DELETE_BUTTON) ? (
              <Item key={`${index + 1}3`} icon={<DeleteOutlined />}>
                Resource Resource
              </Item>
            ) : null}
          </SubMenu>
        ))}
      </Menu>
    </>
  );
};

export default Navbar;
