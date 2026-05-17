import React from 'react';

export const iconData = {
  id: "PictureInPicture",
  name: "PictureInPicture",
  category: "P",
  nodes: [["path",{"d":"M2 10h6V4"}],["path",{"d":"m2 4 6 6"}],["path",{"d":"M21 10V7a2 2 0 0 0-2-2h-7"}],["path",{"d":"M3 14v2a2 2 0 0 0 2 2h3"}],["rect",{"x":"12","y":"14","width":"10","height":"7","rx":"1"}]]
};

export const PictureInPicture = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 10h6V4" />
      <path d="m2 4 6 6" />
      <path d="M21 10V7a2 2 0 0 0-2-2h-7" />
      <path d="M3 14v2a2 2 0 0 0 2 2h3" />
      <rect x="12" y="14" width="10" height="7" rx="1" />
    </svg>
  );
};

export default PictureInPicture;
