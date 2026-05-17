import React from 'react';

export const iconData = {
  id: "AlignHorizontalJustifyEnd",
  name: "AlignHorizontalJustifyEnd",
  category: "A",
  nodes: [["rect",{"width":"6","height":"14","x":"2","y":"5","rx":"2"}],["rect",{"width":"6","height":"10","x":"12","y":"7","rx":"2"}],["path",{"d":"M22 2v20"}]]
};

export const AlignHorizontalJustifyEnd = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="6" height="14" x="2" y="5" rx="2" />
      <rect width="6" height="10" x="12" y="7" rx="2" />
      <path d="M22 2v20" />
    </svg>
  );
};

export default AlignHorizontalJustifyEnd;
