import { GetAdminJobs_getAdminJobs } from "../../container/career/__generated__/GetAdminJobs";
import { Button, Space, Table, Typography, Tag } from "antd";
import { ColumnsType } from "antd/lib/table";
import moment from "moment";
import router from "next/router";

const columns: ColumnsType<GetAdminJobs_getAdminJobs> = [
  {
    title: "COMPANY NAME",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "ROLE TYPE",
    dataIndex: "type",
    key: "type",
    render: (type: string) => <Tag color={type === 'Corporate' ? 'geekblue' : 'green'}>{type}</Tag>,
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
    render: (date: string) => moment(date).format("MMM Do YY HH:mm a"),
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
        <Button
          type="ghost"
          onClick={() =>
            router.push(`/career?mode=applications&id=${record.id}`, undefined, {
              shallow: true,
            })
          }
        >
          View Applications
        </Button>
      </Space>
    ),
  },
];

const Applications: React.FC<{ jobs: GetAdminJobs_getAdminJobs[] }> = ({ jobs }) => {
  return (
    <>
      <Typography.Title
        level={3}
        style={{ textAlign: "center", margin: "15px 0" }}
      >
        Applications
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

export default Applications;
