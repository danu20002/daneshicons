import React from 'react';

export const iconData = {
  id: "AlignHorizontalSpaceAround",
  name: "AlignHorizontalSpaceAround",
  category: "A",
  nodes: [["rect",{"width":"6","height":"10","x":"9","y":"7","rx":"2"}],["path",{"d":"M4 22V2"}],["path",{"d":"M20 22V2"}]]
};

export const AlignHorizontalSpaceAround = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="6" height="10" x="9" y="7" rx="2" />
      <path d="M4 22V2" />
      <path d="M20 22V2" />
    </svg>
  );
};

export default AlignHorizontalSpaceAround;
