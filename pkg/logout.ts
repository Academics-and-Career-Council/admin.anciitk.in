import axios, { AxiosError } from "axios";
import type { SetterOrUpdater } from "recoil";
import { SessionState } from "@anciitk/kratos-verify-session";

const logout = (
  logoutUrl: string,
  setSession: SetterOrUpdater<SessionState | undefined>
) => {
  axios
    .get(logoutUrl, { withCredentials: true })
    .then(() => setSession(undefined))
    .catch((err: AxiosError) => {
      return Promise.reject(err);
    });
};

export default logout