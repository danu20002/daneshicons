import React from 'react';

export const iconData = {
  id: "Microwave",
  name: "Microwave",
  category: "M",
  nodes: [["rect",{"width":"20","height":"15","x":"2","y":"4","rx":"2"}],["rect",{"width":"8","height":"7","x":"6","y":"8","rx":"1"}],["path",{"d":"M18 8v7"}],["path",{"d":"M6 19v2"}],["path",{"d":"M18 19v2"}]]
};

export const Microwave = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="20" height="15" x="2" y="4" rx="2" />
      <rect width="8" height="7" x="6" y="8" rx="1" />
      <path d="M18 8v7" />
      <path d="M6 19v2" />
      <path d="M18 19v2" />
    </svg>
  );
};

export default Microwave;
