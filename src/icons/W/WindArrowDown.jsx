import React from 'react';

export const iconData = {
  id: "WindArrowDown",
  name: "WindArrowDown",
  category: "W",
  nodes: [["path",{"d":"M10 2v8"}],["path",{"d":"M12.8 21.6A2 2 0 1 0 14 18H2"}],["path",{"d":"M17.5 10a2.5 2.5 0 1 1 2 4H2"}],["path",{"d":"m6 6 4 4 4-4"}]]
};

export const WindArrowDown = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 2v8" />
      <path d="M12.8 21.6A2 2 0 1 0 14 18H2" />
      <path d="M17.5 10a2.5 2.5 0 1 1 2 4H2" />
      <path d="m6 6 4 4 4-4" />
    </svg>
  );
};

export default WindArrowDown;
