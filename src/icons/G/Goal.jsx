import React from 'react';

export const iconData = {
  id: "Goal",
  name: "Goal",
  category: "G",
  nodes: [["path",{"d":"M12 13V2l8 4-8 4"}],["path",{"d":"M20.561 10.222a9 9 0 1 1-12.55-5.29"}],["path",{"d":"M8.002 9.997a5 5 0 1 0 8.9 2.02"}]]
};

export const Goal = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 13V2l8 4-8 4" />
      <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
      <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
    </svg>
  );
};

export default Goal;
