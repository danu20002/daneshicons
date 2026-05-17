import React from 'react';

export const iconData = {
  id: "ClosedCaption",
  name: "ClosedCaption",
  category: "C",
  nodes: [["path",{"d":"M10 9.17a3 3 0 1 0 0 5.66"}],["path",{"d":"M17 9.17a3 3 0 1 0 0 5.66"}],["rect",{"x":"2","y":"5","width":"20","height":"14","rx":"2"}]]
};

export const ClosedCaption = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 9.17a3 3 0 1 0 0 5.66" />
      <path d="M17 9.17a3 3 0 1 0 0 5.66" />
      <rect x="2" y="5" width="20" height="14" rx="2" />
    </svg>
  );
};

export default ClosedCaption;
