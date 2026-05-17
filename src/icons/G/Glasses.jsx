import React from 'react';

export const iconData = {
  id: "Glasses",
  name: "Glasses",
  category: "G",
  nodes: [["circle",{"cx":"6","cy":"15","r":"4"}],["circle",{"cx":"18","cy":"15","r":"4"}],["path",{"d":"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"}],["path",{"d":"M2.5 13 5 7c.7-1.3 1.4-2 3-2"}],["path",{"d":"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"}]]
};

export const Glasses = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="6" cy="15" r="4" />
      <circle cx="18" cy="15" r="4" />
      <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
      <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
      <path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />
    </svg>
  );
};

export default Glasses;
