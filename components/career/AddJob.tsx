import { Typography } from "antd";
import JobForm from "./JobForm";

const AddJob: React.FC = () => {
  return (
    <>
      <Typography.Title
        style={{ textAlign: "center", marginTop: "10px" }}
        level={3}
      >
        ADD JOB FORM
      </Typography.Title>
      <JobForm
        data={{
          __typename: "AdminJob",
          id: "",
          name: "",
          designation: "",
          description: "",
          jd: "",
          stipend: "",
          eligibility: "",
          nature_of_business: "",
          location: "",
          shortlist: "",
          test: "",
          deadline: "",
          application_process: ""
        }}
        type="add"
      />
    </>
  );
};

export default AddJob;
