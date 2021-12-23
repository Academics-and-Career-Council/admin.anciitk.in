import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "@anciitk/kratos-verify-session/dist/index.css"
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
export default MyApp;
