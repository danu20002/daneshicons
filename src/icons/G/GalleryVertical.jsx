import React from 'react';

export const iconData = {
  id: "GalleryVertical",
  name: "GalleryVertical",
  category: "G",
  nodes: [["path",{"d":"M3 2h18"}],["rect",{"width":"18","height":"12","x":"3","y":"6","rx":"2"}],["path",{"d":"M3 22h18"}]]
};

export const GalleryVertical = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 2h18" />
      <rect width="18" height="12" x="3" y="6" rx="2" />
      <path d="M3 22h18" />
    </svg>
  );
};

export default GalleryVertical;
