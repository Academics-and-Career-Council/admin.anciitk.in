import { useRecoilState } from "recoil";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import { AbacProvider, AllowedTo } from "react-abac";
import { rules, permissions } from "../pkg/abac";
import ResourcePage from "../components/resource/ResourcePage";
import { Role } from "@anciitk/xenon-js";

const Resource: React.FC = () => {
  const [session] = useRecoilState(recoilSessionState);
  const logoutUrl = session?.logoutUrl;
  const UserName = session?.user.name;
  const role = session?.user.role;
  return (
    <AbacProvider roles={[Role.Secretary]} rules={rules}>
      <ResourcePage />
    </AbacProvider>
  );
};

export default Resource;
