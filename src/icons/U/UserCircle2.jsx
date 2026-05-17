import React from 'react';

export const iconData = {
  id: "UserCircle2",
  name: "UserCircle2",
  category: "U",
  nodes: [["path",{"d":"M17.925 20.056a6 6 0 0 0-11.851.001"}],["circle",{"cx":"12","cy":"11","r":"4"}],["circle",{"cx":"12","cy":"12","r":"10"}]]
};

export const UserCircle2 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M17.925 20.056a6 6 0 0 0-11.851.001" />
      <circle cx="12" cy="11" r="4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};

export default UserCircle2;
