import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import 'react-markdown-editor-lite/lib/index.css';
import 'antd/dist/antd.css';
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
