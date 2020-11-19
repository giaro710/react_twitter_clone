import React from "react";
import "../css/Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";

const Tweetbox = () => {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://images.unsplash.com/photo-1468011749792-10026eb12caf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
};

export default Tweetbox;
