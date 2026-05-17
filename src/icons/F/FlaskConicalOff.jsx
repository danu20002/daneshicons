import React from 'react';

export const iconData = {
  id: "FlaskConicalOff",
  name: "FlaskConicalOff",
  category: "F",
  nodes: [["path",{"d":"M10 2v2.343"}],["path",{"d":"M14 2v6.343"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563"}],["path",{"d":"M6.453 15H15"}],["path",{"d":"M8.5 2h7"}]]
};

export const FlaskConicalOff = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 2v2.343" />
      <path d="M14 2v6.343" />
      <path d="m2 2 20 20" />
      <path d="M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" />
      <path d="M6.453 15H15" />
      <path d="M8.5 2h7" />
    </svg>
  );
};

export default FlaskConicalOff;
