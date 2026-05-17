import React from 'react';

export const iconData = {
  id: "AudioLines",
  name: "AudioLines",
  category: "A",
  nodes: [["path",{"d":"M2 10v3"}],["path",{"d":"M6 6v11"}],["path",{"d":"M10 3v18"}],["path",{"d":"M14 8v7"}],["path",{"d":"M18 5v13"}],["path",{"d":"M22 10v3"}]]
};

export const AudioLines = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 10v3" />
      <path d="M6 6v11" />
      <path d="M10 3v18" />
      <path d="M14 8v7" />
      <path d="M18 5v13" />
      <path d="M22 10v3" />
    </svg>
  );
};

export default AudioLines;
