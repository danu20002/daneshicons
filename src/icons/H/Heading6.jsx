import React from 'react';

export const iconData = {
  id: "Heading6",
  name: "Heading6",
  category: "H",
  nodes: [["path",{"d":"M4 12h8"}],["path",{"d":"M4 18V6"}],["path",{"d":"M12 18V6"}],["circle",{"cx":"19","cy":"16","r":"2"}],["path",{"d":"M20 10c-2 2-3 3.5-3 6"}]]
};

export const Heading6 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <circle cx="19" cy="16" r="2" />
      <path d="M20 10c-2 2-3 3.5-3 6" />
    </svg>
  );
};

export default Heading6;
