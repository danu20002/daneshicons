import React from 'react';

export const iconData = {
  id: "AlignVerticalJustifyStart",
  name: "AlignVerticalJustifyStart",
  category: "A",
  nodes: [["rect",{"width":"14","height":"6","x":"5","y":"16","rx":"2"}],["rect",{"width":"10","height":"6","x":"7","y":"6","rx":"2"}],["path",{"d":"M2 2h20"}]]
};

export const AlignVerticalJustifyStart = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="14" height="6" x="5" y="16" rx="2" />
      <rect width="10" height="6" x="7" y="6" rx="2" />
      <path d="M2 2h20" />
    </svg>
  );
};

export default AlignVerticalJustifyStart;
