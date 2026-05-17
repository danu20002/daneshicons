import React from 'react';

export const iconData = {
  id: "LampFloor",
  name: "LampFloor",
  category: "L",
  nodes: [["path",{"d":"M12 10v12"}],["path",{"d":"M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z"}],["path",{"d":"M9 22h6"}]]
};

export const LampFloor = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 10v12" />
      <path d="M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z" />
      <path d="M9 22h6" />
    </svg>
  );
};

export default LampFloor;
