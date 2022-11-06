import { useRecoilValue } from "recoil";
import { AbacProvider } from "react-abac";

import { recoilSessionState } from "../pkg/recoilDeclarations";
import { rules } from "../pkg/abac.careers";
import CareerPage from "../components/career/CareerPage";
import WithAuth from "../components/WithAuth";

const CareerDashboard:React.FC = () => {
  const session = useRecoilValue(recoilSessionState);
  const role = session?.user.role;

  return (
    <AbacProvider roles={[role || ""]} rules={rules}>
      <CareerPage />
    </AbacProvider>
  );
};

export default WithAuth(CareerDashboard);
