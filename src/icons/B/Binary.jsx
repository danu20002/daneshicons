import React from 'react';

export const iconData = {
  id: "Binary",
  name: "Binary",
  category: "B",
  nodes: [["rect",{"x":"14","y":"14","width":"4","height":"6","rx":"2"}],["rect",{"x":"6","y":"4","width":"4","height":"6","rx":"2"}],["path",{"d":"M6 20h4"}],["path",{"d":"M14 10h4"}],["path",{"d":"M6 14h2v6"}],["path",{"d":"M14 4h2v6"}]]
};

export const Binary = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect x="14" y="14" width="4" height="6" rx="2" />
      <rect x="6" y="4" width="4" height="6" rx="2" />
      <path d="M6 20h4" />
      <path d="M14 10h4" />
      <path d="M6 14h2v6" />
      <path d="M14 4h2v6" />
    </svg>
  );
};

export default Binary;
