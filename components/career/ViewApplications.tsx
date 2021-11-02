import {
  GetApplications_getAdminApplications,
  GetApplications_getAdminApplications_student,
} from "../../container/career/__generated__/GetApplications";
import { Button, Space, Table, Typography } from "antd";
import { ColumnsType } from "antd/lib/table";

const columns: ColumnsType<GetApplications_getAdminApplications> = [
  {
    title: "Student Details",
    dataIndex: "student",
    key: "student",
    render: (student: GetApplications_getAdminApplications_student) =>
      `${student.name}(${student.rollno})`,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Resume",
    dataIndex: "resume",
    key: "resume",
    render: (link: string) => <a href={link}>view</a>,
  },
];

const ViewApplications: React.FC<{
  applications: GetApplications_getAdminApplications[];
}> = ({ applications }) => {
  return (
    <>
      <Typography.Title
        level={3}
        style={{ textAlign: "center", margin: "15px 0" }}
      >
        JOBS
      </Typography.Title>
      <Table
        bordered
        style={{ textAlign: "center" }}
        columns={columns}
        dataSource={applications}
        pagination={false}
      />
    </>
  );
};

export default ViewApplications;
