import { GetAdminJob_getAdminJob } from "../../container/career/__generated__/GetAdminJob";
import { Typography } from "antd";
import JobForm from "./JobForm";

const EditJob: React.FC<{data: GetAdminJob_getAdminJob}> = ({data}) => {
  return (
    <>
      <Typography.Title
        style={{ textAlign: "center", marginTop: "10px" }}
        level={3}
      >
        EDIT JOB FORM
      </Typography.Title>
      <JobForm data={data} type='edit' />
    </>
  );
};

export default EditJob;
