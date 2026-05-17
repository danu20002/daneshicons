import React from 'react';

export const iconData = {
  id: "AlignHorizontalDistributeEnd",
  name: "AlignHorizontalDistributeEnd",
  category: "A",
  nodes: [["rect",{"width":"6","height":"14","x":"4","y":"5","rx":"2"}],["rect",{"width":"6","height":"10","x":"14","y":"7","rx":"2"}],["path",{"d":"M10 2v20"}],["path",{"d":"M20 2v20"}]]
};

export const AlignHorizontalDistributeEnd = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="6" height="14" x="4" y="5" rx="2" />
      <rect width="6" height="10" x="14" y="7" rx="2" />
      <path d="M10 2v20" />
      <path d="M20 2v20" />
    </svg>
  );
};

export default AlignHorizontalDistributeEnd;
