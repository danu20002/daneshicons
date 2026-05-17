import React from 'react';

export const iconData = {
  id: "Hd",
  name: "Hd",
  category: "H",
  nodes: [["path",{"d":"M10 12H6"}],["path",{"d":"M10 15V9"}],["path",{"d":"M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z"}],["path",{"d":"M6 15V9"}],["rect",{"x":"2","y":"5","width":"20","height":"14","rx":"2"}]]
};

export const Hd = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 12H6" />
      <path d="M10 15V9" />
      <path d="M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z" />
      <path d="M6 15V9" />
      <rect x="2" y="5" width="20" height="14" rx="2" />
    </svg>
  );
};

export default Hd;
