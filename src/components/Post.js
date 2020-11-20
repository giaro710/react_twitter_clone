import React, { forwardRef } from "react";
import "../css/Post.css";
import icons from "../icons";

const Post = forwardRef(
  (
    { displayName, username, verified, timestamp, text, image, avatar },
    ref
  ) => {
    return (
      <div className="post" ref={ref}>
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
          {image && (
            <img src={image} alt="post image" className="post__body--image" />
          )}
          <div className="post__footer">
            <icons.chat fontSize="small" className="post__footer--icon" />
            <icons.repeat fontSize="small" className="post__footer--icon" />
            <icons.like fontSize="small" className="post__footer--icon" />
            <icons.publish fontSize="small" className="post__footer--icon" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
