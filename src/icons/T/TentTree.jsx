import React from 'react';

export const iconData = {
  id: "TentTree",
  name: "TentTree",
  category: "T",
  nodes: [["circle",{"cx":"4","cy":"4","r":"2"}],["path",{"d":"m14 5 3-3 3 3"}],["path",{"d":"m14 10 3-3 3 3"}],["path",{"d":"M17 14V2"}],["path",{"d":"M17 14H7l-5 8h20Z"}],["path",{"d":"M8 14v8"}],["path",{"d":"m9 14 5 8"}]]
};

export const TentTree = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="4" cy="4" r="2" />
      <path d="m14 5 3-3 3 3" />
      <path d="m14 10 3-3 3 3" />
      <path d="M17 14V2" />
      <path d="M17 14H7l-5 8h20Z" />
      <path d="M8 14v8" />
      <path d="m9 14 5 8" />
    </svg>
  );
};

export default TentTree;
