import React from 'react';

export const iconData = {
  id: "BetweenVerticalStart",
  name: "BetweenVerticalStart",
  category: "B",
  nodes: [["rect",{"width":"7","height":"13","x":"3","y":"8","rx":"1"}],["path",{"d":"m15 2-3 3-3-3"}],["rect",{"width":"7","height":"13","x":"14","y":"8","rx":"1"}]]
};

export const BetweenVerticalStart = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="7" height="13" x="3" y="8" rx="1" />
      <path d="m15 2-3 3-3-3" />
      <rect width="7" height="13" x="14" y="8" rx="1" />
    </svg>
  );
};

export default BetweenVerticalStart;
