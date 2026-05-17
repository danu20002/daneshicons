import React from 'react';

export const iconData = {
  id: "BetweenHorizonalEnd",
  name: "BetweenHorizonalEnd",
  category: "B",
  nodes: [["rect",{"width":"13","height":"7","x":"3","y":"3","rx":"1"}],["path",{"d":"m22 15-3-3 3-3"}],["rect",{"width":"13","height":"7","x":"3","y":"14","rx":"1"}]]
};

export const BetweenHorizonalEnd = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="13" height="7" x="3" y="3" rx="1" />
      <path d="m22 15-3-3 3-3" />
      <rect width="13" height="7" x="3" y="14" rx="1" />
    </svg>
  );
};

export default BetweenHorizonalEnd;
