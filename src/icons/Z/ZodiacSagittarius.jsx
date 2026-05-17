import React from 'react';

export const iconData = {
  id: "ZodiacSagittarius",
  name: "ZodiacSagittarius",
  category: "Z",
  nodes: [["path",{"d":"M15 3h6v6"}],["path",{"d":"M21 3 3 21"}],["path",{"d":"m9 9 6 6"}]]
};

export const ZodiacSagittarius = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M15 3h6v6" />
      <path d="M21 3 3 21" />
      <path d="m9 9 6 6" />
    </svg>
  );
};

export default ZodiacSagittarius;
