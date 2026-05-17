import React from 'react';

export const iconData = {
  id: "Beaker",
  name: "Beaker",
  category: "B",
  nodes: [["path",{"d":"M4.5 3h15"}],["path",{"d":"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"}],["path",{"d":"M6 14h12"}]]
};

export const Beaker = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </svg>
  );
};

export default Beaker;
