import {
  GetApplications_getAdminApplications,
  GetApplications_getAdminApplications_student,
} from "../../container/career/__generated__/GetApplications";
import { Button, Space, Table, Typography, Tabs } from "antd";
import { ColumnsType } from "antd/lib/table";
import {
  SpreadsheetComponent,
  SheetsDirective,
  SheetDirective,
  RangesDirective,
  RangeDirective,
} from "@syncfusion/ej2-react-spreadsheet";

import DownloadButton from "../../container/career/DownloadApplications";

const columns: ColumnsType<GetApplications_getAdminApplications> = [
  {
    title: "Student Name",
    dataIndex: "student",
    key: "name",
    render: (student: GetApplications_getAdminApplications_student) =>
      student.name,
  },
  {
    title: "Roll No",
    dataIndex: "student",
    key: "rollNo",
    render: (student: GetApplications_getAdminApplications_student) =>
      student.rollno,
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
  jobID: string
}> = ({ applications, jobID }) => {
  const { TabPane } = Tabs;
  const sheetApplications = applications.map((application) => {
    return {
      Name: application.student?.name,
      "Roll No": application.student?.rollno,
      Status: application.status,
      Resume: application.resume,
    };
  });
  return (
    <>
      <Typography.Title
        level={3}
        style={{ textAlign: "center", margin: "15px 0" }}
      >
        Applications
      </Typography.Title>
      <Tabs
        defaultActiveKey="1"
        type="card"
        tabBarExtraContent={<DownloadButton jobID={jobID} />}
      >
        <TabPane tab="Table view" key="1">
          <Table
            bordered
            style={{ textAlign: "center" }}
            columns={columns}
            dataSource={applications}
            pagination={false}
          />
        </TabPane>
        <TabPane tab="Sheet View" key="2">
          <SpreadsheetComponent style={{ width: "80%" }}>
            <SheetsDirective>
              <SheetDirective>
                <RangesDirective>
                  <RangeDirective dataSource={sheetApplications} />
                </RangesDirective>
              </SheetDirective>
            </SheetsDirective>
          </SpreadsheetComponent>
        </TabPane>
      </Tabs>
    </>
  );
};

export default ViewApplications;
