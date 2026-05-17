import React from 'react';

export const iconData = {
  id: "SquareDashedBottomCode",
  name: "SquareDashedBottomCode",
  category: "S",
  nodes: [["path",{"d":"M10 9.5 8 12l2 2.5"}],["path",{"d":"M14 21h1"}],["path",{"d":"m14 9.5 2 2.5-2 2.5"}],["path",{"d":"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{"d":"M9 21h1"}]]
};

export const SquareDashedBottomCode = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 9.5 8 12l2 2.5" />
      <path d="M14 21h1" />
      <path d="m14 9.5 2 2.5-2 2.5" />
      <path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" />
      <path d="M9 21h1" />
    </svg>
  );
};

export default SquareDashedBottomCode;
