import { useRecoilState } from "recoil";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import { AbacProvider } from "react-abac";
import { rules } from "../pkg/abac";
import ResourcePage from "../components/resource/ResourcePage";
import { Role } from "@anciitk/xenon-js";
import WithAuth from "../components/resource/WithAuth";
import { useRouter } from "next/router";

const Resource: React.FC = () => {
  const [session] = useRecoilState(recoilSessionState);
  const role = session?.user.role;
  console.error(role);
  const router = useRouter();

  return (
    <AbacProvider roles={[Role.Admin]} rules={rules}>
      <ResourcePage />
    </AbacProvider>
  );
};

export default WithAuth(Resource);
// export default Resource;
