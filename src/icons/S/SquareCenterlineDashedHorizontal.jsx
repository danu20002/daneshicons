import React from 'react';

export const iconData = {
  id: "SquareCenterlineDashedHorizontal",
  name: "SquareCenterlineDashedHorizontal",
  category: "S",
  nodes: [["path",{"d":"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"}],["path",{"d":"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"}],["path",{"d":"M12 20v2"}],["path",{"d":"M12 14v2"}],["path",{"d":"M12 8v2"}],["path",{"d":"M12 2v2"}]]
};

export const SquareCenterlineDashedHorizontal = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
      <path d="M12 20v2" />
      <path d="M12 14v2" />
      <path d="M12 8v2" />
      <path d="M12 2v2" />
    </svg>
  );
};

export default SquareCenterlineDashedHorizontal;
