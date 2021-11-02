import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout, Menu, Typography } from "antd";
import HomeOutlined from "@ant-design/icons/HomeOutlined";
import LogoutOutlined from "@ant-design/icons/LoginOutlined";

import Navbar from "../components/career/Navbar";
import getCurrentComponent from "../pkg/component";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const itemStyle = { display: "flex", alignItems: "center" };

const CareerDashboard = () => {
  useEffect(() => {
    const mode = window.location.href.trim().split("?")[1]?.split("&")[0];
    if (!mode) {
      router.push("/career?mode=addnotification", undefined, { shallow: true });
    }
  }, []);
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Head>
        <title>Career Portal Admin</title>
      </Head>
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
          onCollapse={(collapsed) => setCollapsed(collapsed)}
        >
          <Navbar />
        </Sider>
        <Layout>
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
          <Content className="m-4 bg-white">
            {typeof router.query["mode"] === "string" &&
            (typeof router.query["id"] === "string" ||
              typeof router.query["id"] === "undefined")
              ? getCurrentComponent(router.query["mode"], router.query["id"])
              : "invalid mode"}
          </Content>
          <Footer className="mx-4" style={{ backgroundColor: "black" }}>
            footer
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default CareerDashboard;
