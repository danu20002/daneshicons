import React from 'react';

export const iconData = {
  id: "Reply",
  name: "Reply",
  category: "R",
  nodes: [["path",{"d":"M20 18v-2a4 4 0 0 0-4-4H4"}],["path",{"d":"m9 17-5-5 5-5"}]]
};

export const Reply = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
      <path d="m9 17-5-5 5-5" />
    </svg>
  );
};

export default Reply;
