import React, { useState } from "react";
import "../css/Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase";
import icons from "../icons";

const Tweetbox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Simone Glück",
      username: "glück_für_alles",
      verified: true,
      text: tweetMessage,
      avatar:
        "https://images.unsplash.com/photo-1468011749792-10026eb12caf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      image: tweetImage,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input-container">
          <Avatar src="https://images.unsplash.com/photo-1468011749792-10026eb12caf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
            placeholder="What's happening?"
            className="tweetbox__input"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          placeholder="Enter an image url"
          className="tweetbox__input--image"
        />
        <icons.button
          onClick={(e) => sendTweet(e)}
          className="tweetbox__tweet-btn"
        >
          Tweet
        </icons.button>
      </form>
    </div>
  );
};

export default Tweetbox;
