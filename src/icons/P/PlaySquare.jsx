import React from 'react';

export const iconData = {
  id: "PlaySquare",
  name: "PlaySquare",
  category: "P",
  nodes: [["rect",{"x":"3","y":"3","width":"18","height":"18","rx":"2"}],["path",{"d":"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"}]]
};

export const PlaySquare = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
    </svg>
  );
};

export default PlaySquare;
