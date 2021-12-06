import React, { useState, useEffect } from "react";
import styles from "../styles/admin.module.css";
import router from "next/router";
import "antd/dist/antd.css";
import { Layout, Menu, Drawer, Space, Popover, Avatar, Button } from "antd";
import {
  EllipsisOutlined,
  UserOutlined,
  BookOutlined,
  SettingOutlined,
  SolutionOutlined,
  ApartmentOutlined,
  MenuOutlined,
  LeftOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { isBrowser, isMobile } from "react-device-detect";
import { useRecoilState } from "recoil";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import { AbacProvider, AllowedTo } from "react-abac";
import { rules, permissions } from "../pkg/abac";
import AdminAccess from "../components/AdminAccess";
import AdminPage from "../components/AdminPage";


const { Header, Content, Footer, Sider } = Layout;

export default function Admin() {
  const [windowWidth, setWindowWidth] = useState(1295);
  const [visible, setVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [session] = useRecoilState(recoilSessionState);
  const logoutUrl = session?.logoutUrl;
  const UserName = session?.user.name;
  const [initials, setInitials] = useState("");
  const role = session?.user.role;
  if(UserName!== undefined && initials ==="") {
    var names = UserName.split(' '),
        initial = names[0].substring(0, 1).toUpperCase();
    
    if (names.length > 1) {
        initial += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    setInitials(initial);
  }
  const profileAvatarUrl = `https://cdn.statically.io/avatar/shape=circle/${initials}`
    

  const onCollapse = () => {
    if (collapsed === false) {
      setCollapsed(true);
    } else if (collapsed === true) {
      setCollapsed(false);
    }
  };
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const content = (
    <div>
      <Button style={{width:"100%", borderColor: "#ffffff", textAlign:"left"}}>
        <Link href="./settings"><p className={styles.logoutMenuItem}>Settings</p></Link>
      </Button>
      <Button style={{width:"100%", borderColor: "#ffffff", textAlign:"left"}}>
        <Link href={`${logoutUrl}`}><p className={styles.logoutMenuItem}>Logout</p></Link>
      </Button>
    </div>
  );

  useEffect(() => {
    if (!session) {
      router.push({
        pathname: "/",
        query: {
          next: "admin",
        },
      });
    }
  }, []);


  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(document.body.clientWidth);
    }
    window.addEventListener("resize", handleResize);
    setWindowWidth(document.body.clientWidth);
  });
  if (windowWidth <= 850 && collapsed === false) {
    setCollapsed(true);
  }


 return (
   <AbacProvider 
   roles={[role]}
   rules={rules}>
     <AdminPage />
   </AbacProvider>
 )
}