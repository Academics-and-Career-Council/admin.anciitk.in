import React from "react";
import { AllowedTo } from "react-abac";


export const permissions = {
    EDIT_POST: "EDIT_POST"
  };

const EditPost = ({ post }:any) => {
  return (
    <AllowedTo
      perform={permissions.EDIT_POST}
      data={post}
      no={() => <span>Not allowed to edit post</span>}
    >
      <span>{post.content}</span>
    </AllowedTo>
  );
};

export default EditPost;