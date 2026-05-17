import React from 'react';

export const iconData = {
  id: "IndianRupee",
  name: "IndianRupee",
  category: "I",
  nodes: [["path",{"d":"M6 3h12"}],["path",{"d":"M6 8h12"}],["path",{"d":"m6 13 8.5 8"}],["path",{"d":"M6 13h3"}],["path",{"d":"M9 13c6.667 0 6.667-10 0-10"}]]
};

export const IndianRupee = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="m6 13 8.5 8" />
      <path d="M6 13h3" />
      <path d="M9 13c6.667 0 6.667-10 0-10" />
    </svg>
  );
};

export default IndianRupee;
