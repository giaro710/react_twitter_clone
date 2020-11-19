import React from "react";
import "../css/Post.css";
import icons from "../icons";

const Post = ({
  displayName,
  userName,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <icons.avatar src="https://images.unsplash.com/photo-1468011749792-10026eb12caf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Simone Gluck{" "}
              <span>
                <icons.verified className="post__badge" />
              </span>
            </h3>
          </div>

          <div className="post__headerDescription">
            <p>Build a Twitter clone with love</p>
          </div>
        </div>
        <img
          src="https://tiragraffi.it/wp-content/uploads/2016/02/Taco_Party_2.gif"
          alt="post image"
        />
      </div>
      <div className="post__footer">
        <icons.chat fontSize="small" />
        <icons.repeat fontSize="small" />
        <icons.like fontSize="small" />
        <icons.publish fontSize="small" />
      </div>
    </div>
  );
};

export default Post;
