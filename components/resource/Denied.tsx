import { useState, useEffect } from "react";
import {useRouter} from "next/router";
import Result from "antd/lib/result"

const AccessDenied: React.FC = () => {
  const [timeRedir, setTimeRedir] = useState(5);
  const router = useRouter();
  setInterval(() => {
    if (timeRedir >= 1) {
      setTimeRedir(timeRedir - 1);
    } else {
      setTimeRedir(1);
    }
  }, 1000);
  return (
    <div>
      <Result
        status="403"
        title="Access Denied"
        subTitle="Sorry, you are not authorised to access this page!"
        extra={
          <>
            {useEffect(() => {
              setTimeout(() => {
                router.push(`${process.env.NEXT_PUBLIC_LOGIN_URL}`, undefined, {shallow:true});
              }, 3000);
            }, [router])}

            <p style={{ color: "#666", fontSize: 17 }}>
              you shall be redirected in <b>{timeRedir}</b> seconds...
            </p>
          </>
        }
      />
    </div>
  );
};

export default AccessDenied;
