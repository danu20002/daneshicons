import React from 'react';

export const iconData = {
  id: "LineDotRightHorizontal",
  name: "LineDotRightHorizontal",
  category: "L",
  nodes: [["path",{"d":"M 3 12 L 15 12"}],["circle",{"cx":"18","cy":"12","r":"3"}]]
};

export const LineDotRightHorizontal = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M 3 12 L 15 12" />
      <circle cx="18" cy="12" r="3" />
    </svg>
  );
};

export default LineDotRightHorizontal;
