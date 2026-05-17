import React from 'react';

export const iconData = {
  id: "Tv2",
  name: "Tv2",
  category: "T",
  nodes: [["path",{"d":"M7 21h10"}],["rect",{"width":"20","height":"14","x":"2","y":"3","rx":"2"}]]
};

export const Tv2 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M7 21h10" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
    </svg>
  );
};

export default Tv2;
