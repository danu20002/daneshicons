import React from 'react';

export const iconData = {
  id: "AlignVerticalDistributeEnd",
  name: "AlignVerticalDistributeEnd",
  category: "A",
  nodes: [["rect",{"width":"14","height":"6","x":"5","y":"14","rx":"2"}],["rect",{"width":"10","height":"6","x":"7","y":"4","rx":"2"}],["path",{"d":"M2 20h20"}],["path",{"d":"M2 10h20"}]]
};

export const AlignVerticalDistributeEnd = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="14" height="6" x="5" y="14" rx="2" />
      <rect width="10" height="6" x="7" y="4" rx="2" />
      <path d="M2 20h20" />
      <path d="M2 10h20" />
    </svg>
  );
};

export default AlignVerticalDistributeEnd;
