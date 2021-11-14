import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout, Menu, Typography, Breadcrumb } from "antd";
import HomeOutlined from "@ant-design/icons/HomeOutlined";
import LogoutOutlined from "@ant-design/icons/LoginOutlined";
import "antd/dist/antd.css";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Title } = Typography;
const itemStyle = { display: "flex", alignItems: "center" };
import NavbarContainer from "../container/resource/Navbar";
import { ResourceClient } from "../graphql/clients";
import { ApolloProvider } from "@apollo/client";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SiderDemo: React.FC = () => {
  const [collapsed, setCollapse] = useState(false);

  return (
    <>
      <Head>
        <title>Resource Portal Admin</title>
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
            <Title level={2}>Dashboard</Title>
            <Menu
              mode="horizontal"
              theme="light"
              style={{ position: "sticky", top: 0, zIndex: 100 }}
            >
              <Menu.Item key="1" icon={<HomeOutlined />} style={itemStyle}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={<LogoutOutlined />}
                style={itemStyle}
                danger
              >
                <Link href="/logout">
                  <a>Logout</a>
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
            <Content style={{ margin: "0 16px" }}>
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

export default SiderDemo;
