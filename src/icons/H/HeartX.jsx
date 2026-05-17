import React from 'react';

export const iconData = {
  id: "HeartX",
  name: "HeartX",
  category: "H",
  nodes: [["path",{"d":"m15.5 12.5 5 5"}],["path",{"d":"m20.5 12.5-5 5"}],["path",{"d":"M21.955 8.774a5.5 5.5 0 0 0-9.546-2.95.6.6 0 0 1-.818 0A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.508 5.332a2 2 0 0 0 2.57.352"}]]
};

export const HeartX = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m15.5 12.5 5 5" />
      <path d="m20.5 12.5-5 5" />
      <path d="M21.955 8.774a5.5 5.5 0 0 0-9.546-2.95.6.6 0 0 1-.818 0A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.508 5.332a2 2 0 0 0 2.57.352" />
    </svg>
  );
};

export default HeartX;
