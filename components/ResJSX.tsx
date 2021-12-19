import { useState, useEffect } from "react";
import {Result} from 'antd';
import router from 'next/router';

const ResJSX = () => {
  const [timeRedir, setTimeRedir] = useState(5);

  setInterval(() => {
    if (timeRedir >= 1) {
      setTimeRedir(timeRedir - 1);
    } else {
      setTimeRedir(1);
    }
  }, 1000);
  return (
    <Result
      status="403"
      title="Access Denied"
      subTitle="Sorry, you are not authorised to access this page!"
      extra={
        <>
          {useEffect(() => {
            setTimeout(() => {
              router.push(`${process.env.NEXT_PUBLIC_LOGIN_URL}`);
            }, 3000);
          }, [])}

          <p style={{ color: "#666", fontSize: 17 }}>
            you shall be redirected in <b>{timeRedir}</b> seconds...
          </p>
        </>
      }
    />
  );
};

export default ResJSX;