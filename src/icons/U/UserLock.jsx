import React from 'react';

export const iconData = {
  id: "UserLock",
  name: "UserLock",
  category: "U",
  nodes: [["path",{"d":"M19 16v-2a2 2 0 0 0-4 0v2"}],["path",{"d":"M9.5 15H7a4 4 0 0 0-4 4v2"}],["circle",{"cx":"10","cy":"7","r":"4"}],["rect",{"x":"13","y":"16","width":"8","height":"5","rx":".899"}]]
};

export const UserLock = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M19 16v-2a2 2 0 0 0-4 0v2" />
      <path d="M9.5 15H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <rect x="13" y="16" width="8" height="5" rx=".899" />
    </svg>
  );
};

export default UserLock;
