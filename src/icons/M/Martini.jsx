import React from 'react';

export const iconData = {
  id: "Martini",
  name: "Martini",
  category: "M",
  nodes: [["path",{"d":"M8 22h8"}],["path",{"d":"M12 11v11"}],["path",{"d":"m19 3-7 8-7-8Z"}]]
};

export const Martini = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M8 22h8" />
      <path d="M12 11v11" />
      <path d="m19 3-7 8-7-8Z" />
    </svg>
  );
};

export default Martini;
