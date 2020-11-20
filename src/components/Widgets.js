import React from "react";
import "../css/Widgets.css";
import icons from "../icons";

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input-container">
        <icons.search className="widgets__searchIcon" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="widgets__input"
        />
      </div>
      <div className="widgets__container">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"5637652"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="codinghorror"
          options={{ height: "400" }}
        />

        <TwitterShareButton url={"#"} />
      </div>
    </div>
  );
};

export default Widgets;
