import React from 'react';

export const iconData = {
  id: "Clock8",
  name: "Clock8",
  category: "C",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M12 6v6l-4 2"}]]
};

export const Clock8 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l-4 2" />
    </svg>
  );
};

export default Clock8;
