import React from 'react';

export const iconData = {
  id: "TextSearch",
  name: "TextSearch",
  category: "T",
  nodes: [["path",{"d":"M21 5H3"}],["path",{"d":"M10 12H3"}],["path",{"d":"M10 19H3"}],["circle",{"cx":"17","cy":"15","r":"3"}],["path",{"d":"m21 19-1.9-1.9"}]]
};

export const TextSearch = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M21 5H3" />
      <path d="M10 12H3" />
      <path d="M10 19H3" />
      <circle cx="17" cy="15" r="3" />
      <path d="m21 19-1.9-1.9" />
    </svg>
  );
};

export default TextSearch;
