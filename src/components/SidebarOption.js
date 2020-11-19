import React from "react";
import "../css/SidebarOption.css";

const SidebarOption = ({ Icon, text, active }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"} `}>
      <Icon className="sidebarOption__icon" />
      <h2 className="sidebarOption__label">{text}</h2>
    </div>
  );
};

export default SidebarOption;
