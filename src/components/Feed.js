import React, { useState, useEffect } from "react";
import "../css/Feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";
import db from "../firebase";
import { PostAddTwoTone } from "@material-ui/icons";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
    console.log(posts);
  }, []);

  const renderPosts = () => {
    return posts.map((post) => {
      return (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      );
    });
  };

  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="feed__header--title">Home</h2>
      </div>

      <Tweetbox />
      <FlipMove>{renderPosts()}</FlipMove>
    </div>
  );
}

export default Feed;
