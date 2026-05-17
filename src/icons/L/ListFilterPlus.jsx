import React from 'react';

export const iconData = {
  id: "ListFilterPlus",
  name: "ListFilterPlus",
  category: "L",
  nodes: [["path",{"d":"M12 5H2"}],["path",{"d":"M6 12h12"}],["path",{"d":"M9 19h6"}],["path",{"d":"M16 5h6"}],["path",{"d":"M19 8V2"}]]
};

export const ListFilterPlus = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 5H2" />
      <path d="M6 12h12" />
      <path d="M9 19h6" />
      <path d="M16 5h6" />
      <path d="M19 8V2" />
    </svg>
  );
};

export default ListFilterPlus;
