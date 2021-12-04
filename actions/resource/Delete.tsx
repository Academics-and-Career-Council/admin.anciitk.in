// import { RemoveJob, RemoveJobVariables } from "./__generated__/RemoveJob";
// import { gql, useMutation } from "@apollo/client";
// import { Button, message } from "antd";

// const DELETE_JOB = gql`
//   mutation RemoveJob($id: ID!) {
//     removeJob(id: $id) {
//       id
//     }
//   }
// `;

// const DeleteJobButton: React.FC<RemoveJobVariables> = ({ id }) => {
//   const [commit, { loading }] = useMutation<RemoveJob, RemoveJobVariables>(
//     DELETE_JOB,
//     { variables: { id }, refetchQueries: ["GetAdminJobs"] }
//   );

//   return (
//     <Button
//       loading={loading}
//       onClick={() =>
//         commit()
//           .then(() =>
//             message.success(
//               "Job removed Successfully with all the applications associated with it"
//             )
//           )
//           .catch((err) => {
//             message.error(err.message);
//             console.log(err);
//           })
//       }
//     >
//       delete
//     </Button>
//   );
// };

// export default DeleteJobButton;
