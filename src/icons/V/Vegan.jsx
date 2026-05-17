import React from 'react';

export const iconData = {
  id: "Vegan",
  name: "Vegan",
  category: "V",
  nodes: [["path",{"d":"M16 8q6 0 6-6-6 0-6 6"}],["path",{"d":"M17.41 3.59a10 10 0 1 0 3 3"}],["path",{"d":"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"}]]
};

export const Vegan = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M16 8q6 0 6-6-6 0-6 6" />
      <path d="M17.41 3.59a10 10 0 1 0 3 3" />
      <path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" />
    </svg>
  );
};

export default Vegan;
