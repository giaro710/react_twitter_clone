import React from "react";

import SidebarOption from "./SidebarOption";

import "../css/Sidebar.css";
import icons from "../icons";
import { Button } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <icons.twitter className="sidebar__twitter-icon" />

        <SidebarOption active Icon={icons.home} text="Home" />
        <SidebarOption Icon={icons.search} text="Explore" />
        <SidebarOption Icon={icons.notifications} text="Notifications" />
        <SidebarOption Icon={icons.message} text="Messages" />
        <SidebarOption Icon={icons.bookmark} text="Bookmarks" />
        <SidebarOption Icon={icons.list} text="Lists" />
        <SidebarOption Icon={icons.profile} text="Profile" />
        <SidebarOption Icon={icons.more} text="More" />

        <Button variant="outlined" className="sidebar__tweet-btn" fullWidth>
          Tweet
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
