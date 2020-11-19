import React from "react";
import "../css/Feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="feed__header--title">Home</h2>
      </div>

      <Tweetbox />

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
