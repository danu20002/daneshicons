import React from 'react';

export const iconData = {
  id: "RotateCwSquare",
  name: "RotateCwSquare",
  category: "R",
  nodes: [["path",{"d":"M12 5H6a2 2 0 0 0-2 2v3"}],["path",{"d":"m9 8 3-3-3-3"}],["path",{"d":"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}]]
};

export const RotateCwSquare = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 5H6a2 2 0 0 0-2 2v3" />
      <path d="m9 8 3-3-3-3" />
      <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    </svg>
  );
};

export default RotateCwSquare;
