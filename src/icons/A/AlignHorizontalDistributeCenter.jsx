import React from 'react';

export const iconData = {
  id: "AlignHorizontalDistributeCenter",
  name: "AlignHorizontalDistributeCenter",
  category: "A",
  nodes: [["rect",{"width":"6","height":"14","x":"4","y":"5","rx":"2"}],["rect",{"width":"6","height":"10","x":"14","y":"7","rx":"2"}],["path",{"d":"M17 22v-5"}],["path",{"d":"M17 7V2"}],["path",{"d":"M7 22v-3"}],["path",{"d":"M7 5V2"}]]
};

export const AlignHorizontalDistributeCenter = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M17 22v-5" />
      <path d="M17 7V2" />
      <path d="M7 22v-3" />
      <path d="M7 5V2" />
    </svg>
  );
};

export default AlignHorizontalDistributeCenter;
