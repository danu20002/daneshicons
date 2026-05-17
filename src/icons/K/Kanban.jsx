import React from 'react';

export const iconData = {
  id: "Kanban",
  name: "Kanban",
  category: "K",
  nodes: [["path",{"d":"M5 3v14"}],["path",{"d":"M12 3v8"}],["path",{"d":"M19 3v18"}]]
};

export const Kanban = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M5 3v14" />
      <path d="M12 3v8" />
      <path d="M19 3v18" />
    </svg>
  );
};

export default Kanban;
