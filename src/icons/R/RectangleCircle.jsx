import React from 'react';

export const iconData = {
  id: "RectangleCircle",
  name: "RectangleCircle",
  category: "R",
  nodes: [["path",{"d":"M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"}],["circle",{"cx":"14","cy":"12","r":"8"}]]
};

export const RectangleCircle = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
      <circle cx="14" cy="12" r="8" />
    </svg>
  );
};

export default RectangleCircle;
