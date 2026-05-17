import React from 'react';

export const iconData = {
  id: "FolderClock",
  name: "FolderClock",
  category: "F",
  nodes: [["path",{"d":"M16 14v2.2l1.6 1"}],["path",{"d":"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"}],["circle",{"cx":"16","cy":"16","r":"6"}]]
};

export const FolderClock = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M16 14v2.2l1.6 1" />
      <path d="M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2" />
      <circle cx="16" cy="16" r="6" />
    </svg>
  );
};

export default FolderClock;
