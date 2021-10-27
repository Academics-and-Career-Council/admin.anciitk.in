import { GetAdminJobs_getAdminJobs } from "../../container/career/__generated__/GetAdminJobs";
import { Button, Space, Table, Typography } from "antd";
import { ColumnsType } from "antd/lib/table";
import moment from "moment";
import DeleteJobButton from "../../actions/career/DeleteJob";
import HideJobButton from "../../actions/career/HideJob";

const columns: ColumnsType<GetAdminJobs_getAdminJobs> = [
  {
    title: "COMPANY NAME",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "OPENING NAME",
    dataIndex: "designation",
    key: "designation",
  },
  {
    title: "DEADLINE",
    dataIndex: "deadline",
    key: "deadline",
    sortOrder: "descend",
    sortDirections: [],
    sorter: (a, b) => moment(a.deadline).diff(moment(b.deadline)),
    render: (date: string) => moment(date).format("MMM Do YY"),
  },
  {
    title: "Stipend",
    dataIndex: "stipend",
    key: "stipend",
  },
  {
    title: "Visibility",
    dataIndex: "visibility",
    key: "visibility",
    render: (visible: boolean) => (visible ? "Visible" : "Hidden"),
  },
  {
    title: "ACTIONS",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => (
      <Space>
        <Button type="ghost">Edit</Button>
        <HideJobButton id={record.id} />
        <DeleteJobButton id={record.id} />
      </Space>
    ),
  },
];

const Jobs: React.FC<{ jobs: GetAdminJobs_getAdminJobs[] }> = ({ jobs }) => {
  return (
    <>
      <Typography.Title
        level={3}
        style={{ textAlign: "center", margin: "15px 0" }}
      >
        Jobs
      </Typography.Title>
      <Table
        bordered
        style={{ textAlign: "center" }}
        columns={columns}
        dataSource={jobs}
        pagination={false}
      />
    </>
  );
};

export default Jobs;
