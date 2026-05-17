import React from 'react';

export const iconData = {
  id: "GalleryThumbnails",
  name: "GalleryThumbnails",
  category: "G",
  nodes: [["rect",{"width":"18","height":"14","x":"3","y":"3","rx":"2"}],["path",{"d":"M4 21h1"}],["path",{"d":"M9 21h1"}],["path",{"d":"M14 21h1"}],["path",{"d":"M19 21h1"}]]
};

export const GalleryThumbnails = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="18" height="14" x="3" y="3" rx="2" />
      <path d="M4 21h1" />
      <path d="M9 21h1" />
      <path d="M14 21h1" />
      <path d="M19 21h1" />
    </svg>
  );
};

export default GalleryThumbnails;
