import React, { useState, useEffect } from "react";
import router from "next/router";
import "antd/dist/antd.css";
import { useRecoilState } from "recoil";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import { AbacProvider, AllowedTo } from "react-abac";
import { rules } from "../pkg/abac.careers";
import AdminPage from "../components/AdminPage";
import WithAuth from "../components/WithAuth";

const  Admin:React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(1295);
  const [collapsed, setCollapsed] = useState(false);
  const [session] = useRecoilState(recoilSessionState);
  const UserName = session?.user.name;
  const [initials, setInitials] = useState("");
  const role = session?.user.role;
  if (UserName !== undefined && initials === "") {
    var names = UserName.split(" "),
      initial = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initial += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    setInitials(initial);
  }

  useEffect(() => {
    function handleResize() {
      setWindowWidth(document.body.clientWidth);
    }
    window.addEventListener("resize", handleResize);
    setWindowWidth(document.body.clientWidth);
  }, []);
  if (windowWidth <= 850 && collapsed === false) {
    setCollapsed(true);
  }

  return (
    <AbacProvider roles={[role || ""]} rules={rules}>
      <AdminPage />
    </AbacProvider>
  );
}

export default WithAuth(Admin);
