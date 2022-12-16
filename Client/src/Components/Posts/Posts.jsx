// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Posts.css";
import { PostsData } from "../../Data/PostsData";
// eslint-disable-next-line no-unused-vars
import Post from "../Post/Post";

const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, id) => {
        return <Post data={post} id={id} />;
      })}
    </div>
  );
};

export default Posts;
