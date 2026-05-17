import React from 'react';

export const iconData = {
  id: "MoveDiagonal",
  name: "MoveDiagonal",
  category: "M",
  nodes: [["path",{"d":"M11 19H5v-6"}],["path",{"d":"M13 5h6v6"}],["path",{"d":"M19 5 5 19"}]]
};

export const MoveDiagonal = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M11 19H5v-6" />
      <path d="M13 5h6v6" />
      <path d="M19 5 5 19" />
    </svg>
  );
};

export default MoveDiagonal;
