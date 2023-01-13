// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Post.css";
import Comments from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useSelector } from "react-redux";
import { likePost } from "../../Api/PostRequest";
import Comment from "../Comment/Comment";
import { useEffect } from "react";
import { getUser } from "../../Api/UserRequest";

const Post = ({ data }) => {
  console.log(data, "data")
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);
  const [username, setUsername] = useState(null);
  useEffect(()=>{
    const fetchUser = async()=>{
      const username = await getUser(data.userId)
      setUsername(username.data.firstname + " " + username.data.lastname)
    } 
    fetchUser();
  },[])

  console.log(username, "username")
  const handleLike = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  const [show, setShow] = useState(false);
  return (
    <div className="Post">
      <div><b>{username}</b></div>
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="postReact" style={{"margin-left":"20px"}}>
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comments} alt="" onClick={() => setShow((show) => !show)} />
        {/* <img src={Share} alt="" /> */}
      </div>

      <span style={{ color: "var(--gray)", fontSize: "13px", "margin-left":"20px" }}>
        {likes} likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
      {show && (
        <div>
          <Comment data={data} />
        </div>
      )}
    </div>
  );
};

export default Post;
