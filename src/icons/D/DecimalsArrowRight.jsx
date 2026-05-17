import React from 'react';

export const iconData = {
  id: "DecimalsArrowRight",
  name: "DecimalsArrowRight",
  category: "D",
  nodes: [["path",{"d":"M10 18h10"}],["path",{"d":"m17 21 3-3-3-3"}],["path",{"d":"M3 11h.01"}],["rect",{"x":"15","y":"3","width":"5","height":"8","rx":"2.5"}],["rect",{"x":"6","y":"3","width":"5","height":"8","rx":"2.5"}]]
};

export const DecimalsArrowRight = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 18h10" />
      <path d="m17 21 3-3-3-3" />
      <path d="M3 11h.01" />
      <rect x="15" y="3" width="5" height="8" rx="2.5" />
      <rect x="6" y="3" width="5" height="8" rx="2.5" />
    </svg>
  );
};

export default DecimalsArrowRight;
