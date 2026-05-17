import React from 'react';

export const iconData = {
  id: "Plus",
  name: "Plus",
  category: "P",
  nodes: [["path",{"d":"M5 12h14"}],["path",{"d":"M12 5v14"}]]
};

export const Plus = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
};

export default Plus;
