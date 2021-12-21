import { useRecoilValue } from "recoil";
import { AbacProvider } from "react-abac";

import { recoilSessionState } from "../pkg/recoilDeclarations";
import { rules } from "../pkg/abac";
import CareerPage from "../components/career/CareerPage";
import WithAuth from "../components/WithAuth";

const CareerDashboard = () => {
  const session = useRecoilValue(recoilSessionState);
  const role = session?.user.role;

  return (
    <AbacProvider roles={[role || ""]} rules={rules}>
      <CareerPage />
    </AbacProvider>
  );
};

export default WithAuth(CareerDashboard);
