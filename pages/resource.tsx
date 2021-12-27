import { useRecoilState } from "recoil";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import { AbacProvider } from "react-abac";
import { rules } from "../pkg/abac";
import ResourcePage from "../components/resource/ResourcePage";
import { Role } from "@anciitk/xenon-js";
import WithAuth from "../components/resource/WithAuth";

const Resource: React.FC = () => {
  const [session] = useRecoilState(recoilSessionState);
  const role = session?.user.role;

  return (
    <AbacProvider roles={[role || Role.Student]} rules={rules}>
      <ResourcePage />
    </AbacProvider>
  );
};

export default WithAuth(Resource);
// export default Resource;
