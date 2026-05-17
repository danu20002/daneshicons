import React from 'react';

export const iconData = {
  id: "DecimalsArrowLeft",
  name: "DecimalsArrowLeft",
  category: "D",
  nodes: [["path",{"d":"m13 21-3-3 3-3"}],["path",{"d":"M20 18H10"}],["path",{"d":"M3 11h.01"}],["rect",{"x":"6","y":"3","width":"5","height":"8","rx":"2.5"}]]
};

export const DecimalsArrowLeft = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m13 21-3-3 3-3" />
      <path d="M20 18H10" />
      <path d="M3 11h.01" />
      <rect x="6" y="3" width="5" height="8" rx="2.5" />
    </svg>
  );
};

export default DecimalsArrowLeft;
