import React from 'react';

export const iconData = {
  id: "Wand",
  name: "Wand",
  category: "W",
  nodes: [["path",{"d":"M15 4V2"}],["path",{"d":"M15 16v-2"}],["path",{"d":"M8 9h2"}],["path",{"d":"M20 9h2"}],["path",{"d":"M17.8 11.8 19 13"}],["path",{"d":"M15 9h.01"}],["path",{"d":"M17.8 6.2 19 5"}],["path",{"d":"m3 21 9-9"}],["path",{"d":"M12.2 6.2 11 5"}]]
};

export const Wand = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8 19 13" />
      <path d="M15 9h.01" />
      <path d="M17.8 6.2 19 5" />
      <path d="m3 21 9-9" />
      <path d="M12.2 6.2 11 5" />
    </svg>
  );
};

export default Wand;
