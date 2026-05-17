import React from 'react';

export const iconData = {
  id: "Tangent",
  name: "Tangent",
  category: "T",
  nodes: [["circle",{"cx":"17","cy":"4","r":"2"}],["path",{"d":"M15.59 5.41 5.41 15.59"}],["circle",{"cx":"4","cy":"17","r":"2"}],["path",{"d":"M12 22s-4-9-1.5-11.5S22 12 22 12"}]]
};

export const Tangent = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="17" cy="4" r="2" />
      <path d="M15.59 5.41 5.41 15.59" />
      <circle cx="4" cy="17" r="2" />
      <path d="M12 22s-4-9-1.5-11.5S22 12 22 12" />
    </svg>
  );
};

export default Tangent;
