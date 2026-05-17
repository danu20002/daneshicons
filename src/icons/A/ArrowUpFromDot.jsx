import React from 'react';

export const iconData = {
  id: "ArrowUpFromDot",
  name: "ArrowUpFromDot",
  category: "A",
  nodes: [["path",{"d":"m5 9 7-7 7 7"}],["path",{"d":"M12 16V2"}],["circle",{"cx":"12","cy":"21","r":"1"}]]
};

export const ArrowUpFromDot = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m5 9 7-7 7 7" />
      <path d="M12 16V2" />
      <circle cx="12" cy="21" r="1" />
    </svg>
  );
};

export default ArrowUpFromDot;
