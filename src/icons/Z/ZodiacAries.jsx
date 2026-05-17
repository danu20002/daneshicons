import React from 'react';

export const iconData = {
  id: "ZodiacAries",
  name: "ZodiacAries",
  category: "Z",
  nodes: [["path",{"d":"M12 7.5a4.5 4.5 0 1 1 5 4.5"}],["path",{"d":"M7 12a4.5 4.5 0 1 1 5-4.5V21"}]]
};

export const ZodiacAries = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 7.5a4.5 4.5 0 1 1 5 4.5" />
      <path d="M7 12a4.5 4.5 0 1 1 5-4.5V21" />
    </svg>
  );
};

export default ZodiacAries;
