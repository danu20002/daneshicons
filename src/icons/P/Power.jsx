import React from 'react';

export const iconData = {
  id: "Power",
  name: "Power",
  category: "P",
  nodes: [["path",{"d":"M12 2v10"}],["path",{"d":"M18.4 6.6a9 9 0 1 1-12.77.04"}]]
};

export const Power = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  );
};

export default Power;
