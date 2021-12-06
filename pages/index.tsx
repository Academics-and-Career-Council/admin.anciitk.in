import type { NextPage } from 'next'
import React from "react";
import { ory } from "../pkg/open-source";
import Redirect from "@anciitk/kratos-verify-session";
import "@anciitk/kratos-verify-session/dist/index.css";
import { useRouter } from "next/router";
import { xenon } from "../pkg/xenon";
import { useRecoilState } from "recoil";
import { recoilSessionState } from "../pkg/recoilDeclarations";


const Home: NextPage = () => {
  const router = useRouter();
  const [session, setSession] = useRecoilState(recoilSessionState);
  const { next: next } = router.query;
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
  )
}

export default Home
