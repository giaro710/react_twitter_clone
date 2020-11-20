import React from "react";
import SidebarOption from "./SidebarOption";
import "../css/Sidebar.css";
import icons from "../icons";

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

        <button className="sidebar__button">Tweet</button>
      </div>
    </div>
  );
};

export default Sidebar;
