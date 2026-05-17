import React from 'react';

export const iconData = {
  id: "SwissFranc",
  name: "SwissFranc",
  category: "S",
  nodes: [["path",{"d":"M10 21V3h8"}],["path",{"d":"M6 16h9"}],["path",{"d":"M10 9.5h7"}]]
};

export const SwissFranc = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 21V3h8" />
      <path d="M6 16h9" />
      <path d="M10 9.5h7" />
    </svg>
  );
};

export default SwissFranc;
