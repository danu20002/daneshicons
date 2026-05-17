import React from 'react';

export const iconData = {
  id: "AlignVerticalSpaceAround",
  name: "AlignVerticalSpaceAround",
  category: "A",
  nodes: [["rect",{"width":"10","height":"6","x":"7","y":"9","rx":"2"}],["path",{"d":"M22 20H2"}],["path",{"d":"M22 4H2"}]]
};

export const AlignVerticalSpaceAround = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="10" height="6" x="7" y="9" rx="2" />
      <path d="M22 20H2" />
      <path d="M22 4H2" />
    </svg>
  );
};

export default AlignVerticalSpaceAround;
