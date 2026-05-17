import React from 'react';

export const iconData = {
  id: "MarsStroke",
  name: "MarsStroke",
  category: "M",
  nodes: [["path",{"d":"m14 6 4 4"}],["path",{"d":"M17 3h4v4"}],["path",{"d":"m21 3-7.75 7.75"}],["circle",{"cx":"9","cy":"15","r":"6"}]]
};

export const MarsStroke = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m14 6 4 4" />
      <path d="M17 3h4v4" />
      <path d="m21 3-7.75 7.75" />
      <circle cx="9" cy="15" r="6" />
    </svg>
  );
};

export default MarsStroke;
