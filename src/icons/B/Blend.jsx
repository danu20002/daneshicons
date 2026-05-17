import React from 'react';

export const iconData = {
  id: "Blend",
  name: "Blend",
  category: "B",
  nodes: [["circle",{"cx":"9","cy":"9","r":"7"}],["circle",{"cx":"15","cy":"15","r":"7"}]]
};

export const Blend = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="9" cy="9" r="7" />
      <circle cx="15" cy="15" r="7" />
    </svg>
  );
};

export default Blend;
