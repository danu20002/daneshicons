import React from 'react';

export const iconData = {
  id: "UserSearch",
  name: "UserSearch",
  category: "U",
  nodes: [["circle",{"cx":"10","cy":"7","r":"4"}],["path",{"d":"M10.3 15H7a4 4 0 0 0-4 4v2"}],["circle",{"cx":"17","cy":"17","r":"3"}],["path",{"d":"m21 21-1.9-1.9"}]]
};

export const UserSearch = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="10" cy="7" r="4" />
      <path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
      <circle cx="17" cy="17" r="3" />
      <path d="m21 21-1.9-1.9" />
    </svg>
  );
};

export default UserSearch;
