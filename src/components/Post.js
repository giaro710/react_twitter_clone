import React from "react";
import "../css/Post.css";
import icons from "../icons";

const Post = ({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <icons.avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              {verified && <icons.verified className="post__badge" />}
              <span className="post__header--username">@{username}</span>
            </h3>
          </div>

          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="post image" className="post__body--image" />
        <div className="post__footer">
          <icons.chat fontSize="small" />
          <icons.repeat fontSize="small" />
          <icons.like fontSize="small" />
          <icons.publish fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
