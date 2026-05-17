import React from 'react';

export const iconData = {
  id: "Barcode",
  name: "Barcode",
  category: "B",
  nodes: [["path",{"d":"M3 5v14"}],["path",{"d":"M8 5v14"}],["path",{"d":"M12 5v14"}],["path",{"d":"M17 5v14"}],["path",{"d":"M21 5v14"}]]
};

export const Barcode = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 5v14" />
      <path d="M8 5v14" />
      <path d="M12 5v14" />
      <path d="M17 5v14" />
      <path d="M21 5v14" />
    </svg>
  );
};

export default Barcode;
