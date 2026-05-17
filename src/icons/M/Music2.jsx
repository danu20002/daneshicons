import React from 'react';

export const iconData = {
  id: "Music2",
  name: "Music2",
  category: "M",
  nodes: [["circle",{"cx":"8","cy":"18","r":"4"}],["path",{"d":"M12 18V2l7 4"}]]
};

export const Music2 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="8" cy="18" r="4" />
      <path d="M12 18V2l7 4" />
    </svg>
  );
};

export default Music2;
