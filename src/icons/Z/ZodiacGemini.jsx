import React from 'react';

export const iconData = {
  id: "ZodiacGemini",
  name: "ZodiacGemini",
  category: "Z",
  nodes: [["path",{"d":"M16 4.525v14.948"}],["path",{"d":"M20 3A17 17 0 0 1 4 3"}],["path",{"d":"M4 21a17 17 0 0 1 16 0"}],["path",{"d":"M8 4.525v14.948"}]]
};

export const ZodiacGemini = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M16 4.525v14.948" />
      <path d="M20 3A17 17 0 0 1 4 3" />
      <path d="M4 21a17 17 0 0 1 16 0" />
      <path d="M8 4.525v14.948" />
    </svg>
  );
};

export default ZodiacGemini;
