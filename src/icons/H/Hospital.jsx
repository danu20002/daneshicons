import React from 'react';

export const iconData = {
  id: "Hospital",
  name: "Hospital",
  category: "H",
  nodes: [["path",{"d":"M12 7v4"}],["path",{"d":"M14 21v-3a2 2 0 0 0-4 0v3"}],["path",{"d":"M14 9h-4"}],["path",{"d":"M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"}],["path",{"d":"M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"}]]
};

export const Hospital = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 7v4" />
      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
      <path d="M14 9h-4" />
      <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" />
    </svg>
  );
};

export default Hospital;
