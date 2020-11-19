import React from "react";
import "../css/Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";

const Tweetbox = () => {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input-container">
          <Avatar src="https://images.unsplash.com/photo-1468011749792-10026eb12caf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
          <input
            type="text"
            placeholder="What's happening?"
            className="tweetbox__input"
          />
        </div>
        <input
          type="text"
          placeholder="Enter an image url"
          className="tweetbox__input--image"
        />
        <Button className="tweetbox__tweet-btn">Tweet</Button>
      </form>
    </div>
  );
};

export default Tweetbox;
