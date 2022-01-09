import React, { useState, useEffect } from "react";
import styles from "../styles/admin.module.css";
import router from "next/router";
import "antd/dist/antd.css";
import { secured } from "react-abac";
import {
  Result,
  Layout,
  Menu,
  Drawer,
  Space,
  Popover,
  Avatar,
  Button,
} from "antd";
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
import { permissions } from "../pkg/abac.careers";
import AdminAccess from "./AdminAccess";
import ResJSX from "./ResJSX";

const { Header, Content, Footer, Sider } = Layout;

const AdminPage = () => {
  const [windowWidth, setWindowWidth] = useState(1295);
  const [visible, setVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [session] = useRecoilState(recoilSessionState);
  const logoutUrl = session?.logoutUrl;
  const UserName = session?.user.name;
  const RollNo = session?.user.rollno;
  const mailId = session?.user.email;
  const branch = session?.user.department;
  const [initials, setInitials] = useState("");
  const imgUrl = `https://cdn.statically.io/img/iitk.ac.in/f=auto/counsel/old/family_tree/images/${RollNo}_0.jpg`;
  const role = session?.user.role;
  if (UserName !== undefined && initials === "") {
    var names = UserName.split(" "),
      initial = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initial += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    setInitials(initial);
  }
  const profileAvatarUrl = `https://cdn.statically.io/avatar/shape=circle/${initials}`;

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
      <Button
        style={{ width: "100%", borderColor: "#ffffff", textAlign: "left" }}
      >
        <Link href={`${process.env.NEXT_PUBLIC_LOGIN_URL}/settings`}>
          <p className={styles.logoutMenuItem}>Settings</p>
        </Link>
      </Button>
      <Button
        style={{ width: "100%", borderColor: "#ffffff", textAlign: "left" }}
      >
        <Link href={`${logoutUrl}`}>
          <p className={styles.logoutMenuItem}>Logout</p>
        </Link>
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

  if (isBrowser) {
    return (
      <>
        <title>Dashboard</title>

        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <Menu theme="dark" defaultSelectedKeys={["6"]} mode="inline">
              <Menu.Item key="6" icon={<SolutionOutlined />}>
                <Link href="/">Admin Profile</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<ApartmentOutlined />}>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/resource`}>
                  Resources Portal
                </Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<WalletOutlined />}>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/career`}>
                  Career Portal
                </Link>
              </Menu.Item>
              {/* <Menu.Item key="4" icon={<BookOutlined />}>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/courses`}>
                  Courses Portal
                </Link>
              </Menu.Item> */}
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ minWidth: "700px" }}>
            <Header
              className="site-layout-background"
              style={{
                padding: 0,
                backgroundColor: "#ffffff",
                height: "90px",
                boxShadow: "2px 2px 4px #b1b1b1",
                display: "flex",
              }}
            >
              <Link href="/dashboard">
                <img
                  src="https://anciitk.in/img/anc-logo.png"
                  alt="AnC IITK logo"
                  height="85px"
                  width="110px"
                  style={{
                    paddingLeft: "30px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                />
              </Link>
              <Popover
                placement={"bottomRight"}
                content={content}
                title="My Profile"
                trigger="click"
              >
                <Avatar
                  size={50}
                  src={profileAvatarUrl}
                  style={{
                    position: "absolute",
                    right: 20,
                    top: 20,
                  }}
                ></Avatar>
              </Popover>
            </Header>

            <Content style={{ margin: "0 16px" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360, width: "100%" }}
              >
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: 40,
                    width: "100%",
                    float: "right",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "10%" }}></div>
                    <div>
                      <object
                        data={imgUrl}
                        style={{
                          height: 230,
                          boxShadow: "2px 2px 4px #b1b1b1",
                        }}
                      >
                        <img
                          src="https://cdn3.vectorstock.com/i/1000x1000/63/02/face-young-woman-using-face-mask-vector-30736302.jpg"
                          alt="IITK"
                          style={{
                            height: 230,
                            objectFit: "cover",
                            boxShadow: "2px 2px 4px #b1b1b1",
                          }}
                        />
                      </object>
                      <br />
                      <br />
                      <hr style={{ border: "1.25px solid #ddd" }}></hr>
                    </div>
                    <div style={{ width: "10%" }}></div>

                    <div style={{ width: "100%", paddingLeft: 30 }}>
                      <div style={{ fontSize: 20, color: "#6b6b6b" }}>
                        Basic Info
                      </div>
                      <hr style={{ border: "1px solid #ddd" }}></hr>
                      <div style={{ fontSize: "17px" }}>
                        Name:
                        <div className={styles.paddingForProfilePage}>
                          {UserName}
                        </div>
                      </div>
                      <br />
                      <br />
                      <div style={{ fontSize: "17px" }}>
                        Roll Number:
                        <div className={styles.paddingForProfilePage}>
                          {RollNo}
                        </div>
                      </div>
                      <br />
                      <br />
                      <div style={{ fontSize: "17px" }}>
                        Email ID:
                        <div className={styles.paddingForProfilePage}>
                          {mailId}
                        </div>
                      </div>
                      <br />
                      <br />
                      <div style={{ fontSize: "17px" }}>
                        Branch:
                        <div className={styles.paddingForProfilePage}>
                          {branch}
                        </div>
                      </div>
                      <br />
                      <br />
                      <div style={{ fontSize: "17px" }}>
                        Role:
                        <div className={styles.paddingForProfilePage}>
                          {role?.toString().toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr style={{ border: "1px solid #ddd" }}></hr>
                </div>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}></Footer>
          </Layout>
        </Layout>
      </>
    );
  } else {
    return <div />;
  }
};

export default secured({
  permissions: permissions.VIEW_ADMIN_PAGE,
  mapPropsToData: (props) => props,
  noAccess: () => <ResJSX />,
})(AdminPage);
