import React from 'react';

export const iconData = {
  id: "Axis3d",
  name: "Axis3d",
  category: "A",
  nodes: [["path",{"d":"M13.5 10.5 15 9"}],["path",{"d":"M4 4v15a1 1 0 0 0 1 1h15"}],["path",{"d":"M4.293 19.707 6 18"}],["path",{"d":"m9 15 1.5-1.5"}]]
};

export const Axis3d = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M13.5 10.5 15 9" />
      <path d="M4 4v15a1 1 0 0 0 1 1h15" />
      <path d="M4.293 19.707 6 18" />
      <path d="m9 15 1.5-1.5" />
    </svg>
  );
};

export default Axis3d;
