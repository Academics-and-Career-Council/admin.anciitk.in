import { useRecoilState } from "recoil";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import { AbacProvider } from "react-abac";
import { rules } from "../pkg/abac";
import ResourcePage from "../components/resource/ResourcePage";
import { Role } from "@anciitk/xenon-js";
import WithAuth from "../components/resource/WithAuth";
import AccessDenied from "../components/resource/Denied";
import { useRouter } from "next/router";

const Resource: React.FC = () => {
  const [session] = useRecoilState(recoilSessionState);
  const role = session?.user.role;
  const router = useRouter();

  let DefaultExport: React.FC;
  console.log(role);
  if (role === Role.Admin) {
    DefaultExport = ResourcePage;
  } else if (role === Role.Manager || role === Role.Secretary) {
    if (router.query.mode === "delete") {
      DefaultExport = AccessDenied;
    } else {
      DefaultExport = ResourcePage;
    }
  } else {
    DefaultExport = AccessDenied;
  }

  return (
    <AbacProvider roles={[role || Role.Student]} rules={rules}>
      {/* <ResourcePage /> */}
      <DefaultExport />
    </AbacProvider>
  );
};

export default WithAuth(Resource);
