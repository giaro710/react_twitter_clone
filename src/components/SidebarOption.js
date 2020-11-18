import React from "react";

const SidebarOption = ({ Icon, text }) => {
  return (
    <div className="sidebarOption">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
