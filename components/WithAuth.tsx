import type { NextPage } from "next";
import Redirect from "@anciitk/kratos-verify-session";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";

import { ory } from "../pkg/open-source";
import { xenon } from "../pkg/xenon";
import { recoilSessionState } from "../pkg/recoilDeclarations";

const WithAuth: (Component: NextPage) => NextPage = (Component: NextPage) => {
  const Auth: NextPage = (props) => {
    const router = useRouter()
    const [session, setSession] = useRecoilState(recoilSessionState);
    const { next } = router.query;
    
    if (!session) {
      return (
        <div>
          <Redirect
            loginUrl={`${process.env.NEXT_PUBLIC_LOGIN_URL}/login`}
            historyPush={router.push}
            sessionState={session}
            setSessionState={setSession}
            basePath={`${process.env.NEXT_PUBLIC_BASE_URL}`}
            path={(next as string) || "admin"}
            ory={ory}
            xenon={xenon}
          />
        </div>
      );
    }
    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default WithAuth;
