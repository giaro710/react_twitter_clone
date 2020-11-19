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
        <SidebarOption Icon={icons.mail} text="Mail" />
        <SidebarOption Icon={icons.bookmark} text="Notifications" />
        <SidebarOption Icon={icons.list} text="List" />
        <SidebarOption Icon={icons.identity} text="Notifications" />
        <SidebarOption Icon={icons.more} text="Notifications" />

        <Button variant="outlined" className="sidebar__tweet" fullWidth>
          Tweet
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
