import React from 'react';

export const iconData = {
  id: "AlignVerticalSpaceBetween",
  name: "AlignVerticalSpaceBetween",
  category: "A",
  nodes: [["rect",{"width":"14","height":"6","x":"5","y":"15","rx":"2"}],["rect",{"width":"10","height":"6","x":"7","y":"3","rx":"2"}],["path",{"d":"M2 21h20"}],["path",{"d":"M2 3h20"}]]
};

export const AlignVerticalSpaceBetween = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="14" height="6" x="5" y="15" rx="2" />
      <rect width="10" height="6" x="7" y="3" rx="2" />
      <path d="M2 21h20" />
      <path d="M2 3h20" />
    </svg>
  );
};

export default AlignVerticalSpaceBetween;
