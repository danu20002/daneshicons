import React from 'react';

export const iconData = {
  id: "StickyNoteMinus",
  name: "StickyNoteMinus",
  category: "S",
  nodes: [["path",{"d":"M15 3v5a1 1 0 0 0 1 1h5"}],["path",{"d":"M21 14V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.35"}],["path",{"d":"M21 18h-6"}]]
};

export const StickyNoteMinus = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M15 3v5a1 1 0 0 0 1 1h5" />
      <path d="M21 14V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.35" />
      <path d="M21 18h-6" />
    </svg>
  );
};

export default StickyNoteMinus;
