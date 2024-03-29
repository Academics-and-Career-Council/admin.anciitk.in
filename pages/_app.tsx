import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "react-markdown-editor-lite/lib/index.css";
import "antd/dist/antd.css";
import "@anciitk/kratos-verify-session/dist/index.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
export default MyApp;
