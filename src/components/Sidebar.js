import React from "react";

import SidebarOption from "./SidebarOption";

import "../css/Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <TwitterIcon />

        <SidebarOption Icon={HomeIcon} text="Home" />
        <SidebarOption Icon={SearchIcon} text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      </div>
    </div>
  );
};

export default Sidebar;
