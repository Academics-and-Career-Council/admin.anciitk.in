import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout, Menu, Typography, Button } from "antd";
import HomeOutlined from "@ant-design/icons/HomeOutlined";
import LogoutOutlined from "@ant-design/icons/LoginOutlined";
import { secured } from "react-abac";
import { useRecoilState } from "recoil";

import Navbar from "./Navbar";
import getCurrentComponent from "../../pkg/component.careers";
import { permissions } from "../../pkg/abac.careers";
import ResJSX from "../ResJSX";
import { recoilSessionState } from "../../pkg/recoilDeclarations";
import logout from "../../pkg/logout";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const itemStyle = { display: "flex", alignItems: "center" };

const CareerDashboard = () => {
  useEffect(() => {
    const mode = window.location.href.trim().split("?")[1]?.split("&")[0];
    if (!mode) {
      router.push("/career?mode=invalid", undefined, { shallow: true });
    }
  }, []);
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [session, setSession] = useRecoilState(recoilSessionState);

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
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Title level={2}>Dashboard</Title>
            <Menu
              mode="horizontal"
              theme="light"
              style={{
                position: "sticky",
                top: 0,
                zIndex: 100,
                width: "min-content",
              }}
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
                <Button
                  type="link"
                  onClick={() => logout(session?.logoutUrl || "", setSession)}
                >
                  Logout
                </Button>
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

// export default CareerDashboard

export default secured({
  permissions: permissions.VIEW_CAREER_PAGE,
  mapPropsToData: (props) => props,
  noAccess: () => <ResJSX />,
})(CareerDashboard);
