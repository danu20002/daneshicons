import React from 'react';

export const iconData = {
  id: "TextCursor",
  name: "TextCursor",
  category: "T",
  nodes: [["path",{"d":"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}],["path",{"d":"M7 22h1a4 4 0 0 0 4-4"}],["path",{"d":"M7 2h1a4 4 0 0 1 4 4"}]]
};

export const TextCursor = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" />
      <path d="M7 22h1a4 4 0 0 0 4-4" />
      <path d="M7 2h1a4 4 0 0 1 4 4" />
    </svg>
  );
};

export default TextCursor;
