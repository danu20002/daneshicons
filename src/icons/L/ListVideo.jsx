import React from 'react';

export const iconData = {
  id: "ListVideo",
  name: "ListVideo",
  category: "L",
  nodes: [["path",{"d":"M21 5H3"}],["path",{"d":"M10 12H3"}],["path",{"d":"M10 19H3"}],["path",{"d":"M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"}]]
};

export const ListVideo = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M21 5H3" />
      <path d="M10 12H3" />
      <path d="M10 19H3" />
      <path d="M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" />
    </svg>
  );
};

export default ListVideo;
