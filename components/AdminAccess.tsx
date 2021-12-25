import React from "react";
import { secured } from "react-abac";
import { Button } from "antd";
import Link from "next/link";
import styles from "../styles/admin.module.css";
import { permissions } from "../pkg/abac.careers";

const AdminAccess = () => {
  return (
    <Button className={styles.coursesButton}>
      <Link href="">
        <div>
          SUPER <br /> ADMIN
        </div>
      </Link>
    </Button>
  );
};

export default secured({
  permissions: permissions.VIEW_BUTTON,
  mapPropsToData: (props) => props,
  noAccess: () => <div />,
})(AdminAccess);
