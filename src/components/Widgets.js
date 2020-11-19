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

        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: "400" }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/profile.php?id=100009346730690"}
          options={{ text: "I love react", via: "Gian Marco Romani" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
