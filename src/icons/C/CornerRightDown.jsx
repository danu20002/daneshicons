import React from 'react';

export const iconData = {
  id: "CornerRightDown",
  name: "CornerRightDown",
  category: "C",
  nodes: [["path",{"d":"m10 15 5 5 5-5"}],["path",{"d":"M4 4h7a4 4 0 0 1 4 4v12"}]]
};

export const CornerRightDown = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m10 15 5 5 5-5" />
      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
    </svg>
  );
};

export default CornerRightDown;
