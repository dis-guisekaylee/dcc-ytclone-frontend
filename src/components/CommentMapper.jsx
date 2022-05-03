import React from "react";
import Comment from "./Comment";

const CommentMapper = ({comments}) => {
  return (
    <ul>
      {comments.map((comment) => <li key={comment._id}><Comment comment={comment}/></li>)}
    </ul>
  );
};

export default CommentMapper;
