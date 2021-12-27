import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout, Menu, Typography, Breadcrumb, Result } from "antd";
import HomeOutlined from "@ant-design/icons/HomeOutlined";
import LogoutOutlined from "@ant-design/icons/LoginOutlined";
import getCurrentComponent from "../../pkg/components";
import NavbarContainer from "../../container/resource/Navbar";
import { ResourceClient } from "../../graphql/clients";
import { ApolloProvider } from "@apollo/client";
import { recoilSessionState } from "../../pkg/recoilDeclarations";
import { useRecoilState } from "recoil";
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const itemStyle = { display: "flex", alignItems: "center" };

const toTitleCase = (str: string | string[] | undefined) => {
  if (typeof str === "string") {
    return str.replace(/\w\S*/g, (txt: string) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
};

const ResourcePage: React.FC = () => {
  const router = useRouter();
  const [collapsed, setCollapse] = useState(false);
  const [session] = useRecoilState(recoilSessionState);
  const logoutUrl = session?.logoutUrl;

  return (
    <>
      <Head>
        <title>Resource Portal Admin</title>
        <link rel="favicon" href="../../public/favicon.ico" />
      </Head>
      <ApolloProvider client={ResourceClient}>
        <Layout style={{ minHeight: "100vh", width: "100vw" }}>
          <Sider
            style={{
              position: "sticky",
              top: 0,
              left: 0,
              backgroundColor: "black",
            }}
            breakpoint="lg"
            collapsible
            collapsed={collapsed}
            onCollapse={(collapsed) => setCollapse(collapsed)}
          >
            <div className="logo" />
            <NavbarContainer />
          </Sider>
          <Layout className="site-layout">
            <Header
              className="flex justify-between items-center"
              style={{
                backgroundColor: "white",
                position: "sticky",
                top: 0,
                zIndex: 100,
              }}
            >
              <Title className="mt-6" level={2}>
                Dashboard
              </Title>
              <Menu
                mode="horizontal"
                theme="light"
                style={{ position: "sticky", top: 0, zIndex: 100 }}
              >
                <Menu.Item key="1" icon={<HomeOutlined />} style={itemStyle}>
                  <Link href="/resource">
                    <a>Home</a>
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="2"
                  icon={<LogoutOutlined />}
                  style={itemStyle}
                  danger
                >
                  <Link href={logoutUrl || "/logout"}>
                    <a>Logout</a>
                  </Link>
                </Menu.Item>
              </Menu>
            </Header>
            {/* <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                Bill is a cat.
              </div>
            </Content> */}
            <Content className="m-4 bg-white">
              <div className="m-4 ml-8 mb-0">
                <Breadcrumb>
                  <Breadcrumb.Item>
                    {toTitleCase(router.query["wing"])}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    {toTitleCase(router.query["mode"])}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div style={{ padding: 24, minHeight: 360 }}>
                {typeof router.query["wing"] === "string" &&
                typeof router.query["mode"] === "string" &&
                (typeof router.query["id"] === "string" ||
                  typeof router.query["id"] === "undefined")
                  ? getCurrentComponent(
                      router.query["wing"],
                      router.query["mode"],
                      router.query["id"]
                    )
                  : getCurrentComponent("invalid", "invalid", undefined)}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              &copy; Academics and Career Council, IITK
            </Footer>
          </Layout>
        </Layout>
      </ApolloProvider>
    </>
  );
};

// export default secured({
//   permissions: permissions.VIEW_PAGE,
//   mapPropsToData: (props) => props,
//   noAccess: () => {
//     return <AccessDenied />
//   },
// })(ResourcePage);
export default ResourcePage;
