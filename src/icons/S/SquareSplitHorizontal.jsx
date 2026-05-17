import React from 'react';

export const iconData = {
  id: "SquareSplitHorizontal",
  name: "SquareSplitHorizontal",
  category: "S",
  nodes: [["path",{"d":"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"}],["path",{"d":"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"}],["line",{"x1":"12","x2":"12","y1":"4","y2":"20"}]]
};

export const SquareSplitHorizontal = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" />
      <path d="M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  );
};

export default SquareSplitHorizontal;
