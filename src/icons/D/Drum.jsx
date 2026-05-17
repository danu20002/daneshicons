import React from 'react';

export const iconData = {
  id: "Drum",
  name: "Drum",
  category: "D",
  nodes: [["path",{"d":"m2 2 8 8"}],["path",{"d":"m22 2-8 8"}],["ellipse",{"cx":"12","cy":"9","rx":"10","ry":"5"}],["path",{"d":"M7 13.4v7.9"}],["path",{"d":"M12 14v8"}],["path",{"d":"M17 13.4v7.9"}],["path",{"d":"M2 9v8a10 5 0 0 0 20 0V9"}]]
};

export const Drum = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m2 2 8 8" />
      <path d="m22 2-8 8" />
      <ellipse cx="12" cy="9" rx="10" ry="5" />
      <path d="M7 13.4v7.9" />
      <path d="M12 14v8" />
      <path d="M17 13.4v7.9" />
      <path d="M2 9v8a10 5 0 0 0 20 0V9" />
    </svg>
  );
};

export default Drum;
