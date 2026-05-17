import React from 'react';

export const iconData = {
  id: "Shredder",
  name: "Shredder",
  category: "S",
  nodes: [["path",{"d":"M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5"}],["path",{"d":"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{"d":"M10 22v-5"}],["path",{"d":"M14 19v-2"}],["path",{"d":"M18 20v-3"}],["path",{"d":"M2 13h20"}],["path",{"d":"M6 20v-3"}]]
};

export const Shredder = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10 22v-5" />
      <path d="M14 19v-2" />
      <path d="M18 20v-3" />
      <path d="M2 13h20" />
      <path d="M6 20v-3" />
    </svg>
  );
};

export default Shredder;
