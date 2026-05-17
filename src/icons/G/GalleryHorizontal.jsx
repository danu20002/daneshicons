import React from 'react';

export const iconData = {
  id: "GalleryHorizontal",
  name: "GalleryHorizontal",
  category: "G",
  nodes: [["path",{"d":"M2 3v18"}],["rect",{"width":"12","height":"18","x":"6","y":"3","rx":"2"}],["path",{"d":"M22 3v18"}]]
};

export const GalleryHorizontal = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 3v18" />
      <rect width="12" height="18" x="6" y="3" rx="2" />
      <path d="M22 3v18" />
    </svg>
  );
};

export default GalleryHorizontal;
