import React from 'react';

export const iconData = {
  id: "PowerOff",
  name: "PowerOff",
  category: "P",
  nodes: [["path",{"d":"M18.36 6.64A9 9 0 0 1 20.77 15"}],["path",{"d":"M6.16 6.16a9 9 0 1 0 12.68 12.68"}],["path",{"d":"M12 2v4"}],["path",{"d":"m2 2 20 20"}]]
};

export const PowerOff = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M18.36 6.64A9 9 0 0 1 20.77 15" />
      <path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" />
      <path d="M12 2v4" />
      <path d="m2 2 20 20" />
    </svg>
  );
};

export default PowerOff;
