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
                <Link href="/">Admin</Link>
              </Menu.Item>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ACCOUNTS_URL}/dashboard`}
                >
                  Profile page
                </Link>
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
              <Menu.Item key="5" icon={<SettingOutlined />}>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/settings`}>
                  Settings
                </Link>
              </Menu.Item>
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
                {/* <div
                  style={{
                    backgroundColor: "#fff",
                    padding: 40,
                    width: "100%",
                    float: "right",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "100%", paddingLeft: 30 }}>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button className={styles.coursesButton}>
                          <Link href="">
                            <div>
                              COURSES <br /> PORTAL
                            </div>
                          </Link>
                        </Button>
                        <Button className={styles.coursesButton}>
                          <Link href="">
                            <div>
                              CAREERS <br /> PORTAL
                            </div>
                          </Link>
                        </Button>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button className={styles.coursesButton}>
                          <Link href="">
                            <div>
                              RESOURSES <br /> PORTAL
                            </div>
                          </Link>
                        </Button>

                        <AdminAccess />
                      </div>
                    </div>
                  </div>
                  <hr style={{ border: "1px solid #ddd" }}></hr>
                </div> */}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}></Footer>
          </Layout>
        </Layout>
      </>
    );
  } else if (isMobile) {
    return (
      <div>
        <title>Dashboard</title>
        <Layout>
          <Space></Space>
          <Drawer
            className={styles.customPadding}
            placement="left"
            closable={false}
            onClose={onClose}
            visible={visible}
            key="left"
            bodyStyle={{ padding: 0, backgroundColor: "#001529" }}
          >
            <div
              style={{
                height: "40px",
                margin: "12px",
                background: "rgba(255, 255, 255, 0.3)",
              }}
            />

            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item
                key="1"
                icon={<UserOutlined style={{ fontSize: "20px" }} />}
                className={styles.phoneMenuProfile}
              >
                <Link href={`${process.env.NEXT_PUBLIC_LOGIN_URL}/dashboard`}>
                  Profile page
                </Link>
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={<ApartmentOutlined style={{ fontSize: "20px" }} />}
                className={styles.phoneMenuProfile}
              >
                <Link href={`${process.env.NEXT_PUBLIC_LOGIN_URL}/resources`}>
                  Resources Portal
                </Link>
              </Menu.Item>
              <Menu.Item
                key="3"
                icon={<SolutionOutlined style={{ fontSize: "20px" }} />}
                className={styles.phoneMenuProfile}
              >
                <Link href={`${process.env.NEXT_PUBLIC_LOGIN_URL}/career`}>
                  Career Portal
                </Link>
              </Menu.Item>
              <Menu.Item
                key="4"
                icon={<BookOutlined style={{ fontSize: "20px" }} />}
                className={styles.phoneMenuProfile}
              >
                <Link href={`${process.env.NEXT_PUBLIC_LOGIN_URL}/courses`}>
                  Courses Portal
                </Link>
              </Menu.Item>
              <Menu.Item
                key="5"
                icon={<SettingOutlined style={{ fontSize: "20px" }} />}
                className={styles.phoneMenuProfile}
              >
                <Link href={`${process.env.NEXT_PUBLIC_LOGIN_URL}/settings`}>
                  Settings
                </Link>
              </Menu.Item>
            </Menu>
            <div
              style={{
                position: "absolute",
                bottom: "0px",
                color: "#fff",
                backgroundColor: "#002140",
                width: "100%",
              }}
            >
              <div className={styles.arrowProfile} onClick={onClose}>
                <LeftOutlined style={{ fontSize: "20px" }} />
              </div>
            </div>
          </Drawer>
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{
                padding: 0,
                backgroundColor: "#ffffff",
                height: "10vh",
                display: "flex",
                boxShadow: "2px 2px 4px #b1b1b1",
              }}
            >
              <button
                onClick={showDrawer}
                style={{
                  paddingRight: "10px",
                  paddingLeft: 10,
                  border: "0px",
                  paddingBottom: 10,
                  paddingTop: 5,
                  backgroundColor: "#ffffff",
                }}
              >
                <MenuOutlined style={{ fontSize: "30px" }} />
              </button>
              <h1 className={styles.base}>Dashboard</h1>
              <div
                style={{
                  fontSize: 30,
                  position: "absolute",
                  right: 20,
                  top: 0,
                }}
              >
                <Popover
                  placement={"bottomRight"}
                  content={content}
                  title="My Profile"
                  trigger="click"
                >
                  <EllipsisOutlined />
                </Popover>
              </div>
            </Header>
            <Content style={{ margin: "-20px 16px", height: "90vh" }}>
              <br />
              <br />

              <div className="" style={{ minHeight: "75vh", padding: "5px" }}>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    paddingTop: "5px",
                    paddingBottom: "25px",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <div
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Button className={styles.phoneButton}>
                        <Link href="">
                          <div>
                            COURSES <br /> PORTAL
                          </div>
                        </Link>
                      </Button>
                      <Button className={styles.phoneButton}>
                        <Link href="">
                          <div>
                            CAREERS <br /> PORTAL
                          </div>
                        </Link>
                      </Button>
                      <Button className={styles.phoneButton}>
                        <Link href="">
                          <div>
                            RESOURSES <br /> PORTAL
                          </div>
                        </Link>
                      </Button>

                      <AdminAccess />
                    </div>
                  </div>
                  <hr></hr>
                </div>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}></Footer>
          </Layout>
        </Layout>
      </div>
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
