import React from "react";
import Button from '@material-ui/core/Button';
import "./Post.css";

const Post = ({ post: { title, body, company, author }, index }) => {
  return (
    <div className="post-container">
      <h1 className="heading">{title}</h1>
      <h3 className="heading">{company}</h3>
      <p>{body}</p>
      <div className="info">
      <Button
          color="secondary"
          variant="contained"
          size="large"
          component="a"
        >Apply</Button>
      </div>
    </div>
  );
};

export default Post;
