import React from 'react';

export const iconData = {
  id: "UserX2",
  name: "UserX2",
  category: "U",
  nodes: [["path",{"d":"M2 21a8 8 0 0 1 11.873-7"}],["circle",{"cx":"10","cy":"8","r":"5"}],["path",{"d":"m17 17 5 5"}],["path",{"d":"m22 17-5 5"}]]
};

export const UserX2 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 21a8 8 0 0 1 11.873-7" />
      <circle cx="10" cy="8" r="5" />
      <path d="m17 17 5 5" />
      <path d="m22 17-5 5" />
    </svg>
  );
};

export default UserX2;
