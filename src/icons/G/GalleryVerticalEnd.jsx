import React from 'react';

export const iconData = {
  id: "GalleryVerticalEnd",
  name: "GalleryVerticalEnd",
  category: "G",
  nodes: [["path",{"d":"M7 2h10"}],["path",{"d":"M5 6h14"}],["rect",{"width":"18","height":"12","x":"3","y":"10","rx":"2"}]]
};

export const GalleryVerticalEnd = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M7 2h10" />
      <path d="M5 6h14" />
      <rect width="18" height="12" x="3" y="10" rx="2" />
    </svg>
  );
};

export default GalleryVerticalEnd;
