import React from 'react';

export const iconData = {
  id: "ImageUp",
  name: "ImageUp",
  category: "I",
  nodes: [["path",{"d":"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{"d":"m14 19.5 3-3 3 3"}],["path",{"d":"M17 22v-5.5"}],["circle",{"cx":"9","cy":"9","r":"2"}]]
};

export const ImageUp = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
      <path d="m14 19.5 3-3 3 3" />
      <path d="M17 22v-5.5" />
      <circle cx="9" cy="9" r="2" />
    </svg>
  );
};

export default ImageUp;
