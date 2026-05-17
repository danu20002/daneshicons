import React from 'react';

export const iconData = {
  id: "Dessert",
  name: "Dessert",
  category: "D",
  nodes: [["path",{"d":"M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826"}],["path",{"d":"M20.804 14.869a9 9 0 0 1-17.608 0"}],["circle",{"cx":"12","cy":"4","r":"2"}]]
};

export const Dessert = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826" />
      <path d="M20.804 14.869a9 9 0 0 1-17.608 0" />
      <circle cx="12" cy="4" r="2" />
    </svg>
  );
};

export default Dessert;
