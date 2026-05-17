import React from 'react';

export const iconData = {
  id: "TvMinimal",
  name: "TvMinimal",
  category: "T",
  nodes: [["path",{"d":"M7 21h10"}],["rect",{"width":"20","height":"14","x":"2","y":"3","rx":"2"}]]
};

export const TvMinimal = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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

export default TvMinimal;
