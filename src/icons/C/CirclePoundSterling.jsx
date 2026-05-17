import React from 'react';

export const iconData = {
  id: "CirclePoundSterling",
  name: "CirclePoundSterling",
  category: "C",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M10 16V9.5a1 1 0 0 1 5 0"}],["path",{"d":"M8 12h4"}],["path",{"d":"M8 16h7"}]]
};

export const CirclePoundSterling = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M10 16V9.5a1 1 0 0 1 5 0" />
      <path d="M8 12h4" />
      <path d="M8 16h7" />
    </svg>
  );
};

export default CirclePoundSterling;
