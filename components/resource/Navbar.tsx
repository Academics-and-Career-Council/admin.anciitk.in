import {
  GetWings,
  GetWings_getWings,
} from "../../container/resource/__generated__/GetWings";
import { Menu } from "antd";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

import Submenu from "./Submenu";

import TagsOutlined from "@ant-design/icons/TagsOutlined";
import PlusCircleOutlined from "@ant-design/icons/PlusCircleOutlined";
import EditOutlined from "@ant-design/icons/EditOutlined";
import DeleteOutlined from "@ant-design/icons/DeleteOutlined";
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

const getWing = (key: string) => {
  let wingKey = key[0];
  let wing = "";
  switch (wingKey) {
    case "1":
      wing = "career development";
      break;
    case "2":
      wing = "wing2";
      break;
    case "3":
      wing = "wing3";
      break;
    case "4":
      wing = "wing4";
      break;
    default:
      wing = "invalid";
      break;
  }
  return wing;
};

const Navbar: React.FC<{ wings: GetWings_getWings[] }> = ({ wings }) => {
  const router = useRouter();
  const [selectedWing, setSelectedWing] = useState("");
  const [selectedMode, setSelectedMode] = useState("");
  // const [result, setResult] = useState<GetWings["getWings"]>([]);

  // useEffect(() => {
  //   let copy: DeepWriteable<GetWings["getWings"]> = JSON.parse(
  //     JSON.stringify(wings)
  //   );
  //   setResult(copy);
  // }, [wings]);

  useEffect(() => {
    const wing = window.location.href
      .trim()
      .split("?")[1]
      ?.split("&")[0]
      ?.split("=")[1];
    setSelectedWing(wing);

    const mode = window.location.href
      .trim()
      .split("?")[1]
      ?.split("&")[1]
      ?.split("=")[1];
    setSelectedMode(mode);
  }, []);
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
          const wing = getWing(info.key);
          setSelectedMode(mode);
          setSelectedWing(wing);
          router.push(`/resource?wing=${wing}&mode=${mode}`, undefined, {
            shallow: true,
          });
        }}
      >
        {wings.map((wing, index)=> <Submenu number={`${index}`} key={index} title={wing.name}/>)}
      </Menu>
    </>
  );
};

export default Navbar;
