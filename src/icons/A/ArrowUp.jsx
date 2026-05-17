import React from 'react';

export const iconData = {
  id: "ArrowUp",
  name: "ArrowUp",
  category: "A",
  nodes: [["path",{"d":"m5 12 7-7 7 7"}],["path",{"d":"M12 19V5"}]]
};

export const ArrowUp = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
};

export default ArrowUp;
