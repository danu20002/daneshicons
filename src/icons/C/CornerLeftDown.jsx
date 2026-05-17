import React from 'react';

export const iconData = {
  id: "CornerLeftDown",
  name: "CornerLeftDown",
  category: "C",
  nodes: [["path",{"d":"m14 15-5 5-5-5"}],["path",{"d":"M20 4h-7a4 4 0 0 0-4 4v12"}]]
};

export const CornerLeftDown = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m14 15-5 5-5-5" />
      <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
    </svg>
  );
};

export default CornerLeftDown;
