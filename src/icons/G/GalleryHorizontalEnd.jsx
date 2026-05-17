import React from 'react';

export const iconData = {
  id: "GalleryHorizontalEnd",
  name: "GalleryHorizontalEnd",
  category: "G",
  nodes: [["path",{"d":"M2 7v10"}],["path",{"d":"M6 5v14"}],["rect",{"width":"12","height":"18","x":"10","y":"3","rx":"2"}]]
};

export const GalleryHorizontalEnd = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 7v10" />
      <path d="M6 5v14" />
      <rect width="12" height="18" x="10" y="3" rx="2" />
    </svg>
  );
};

export default GalleryHorizontalEnd;
