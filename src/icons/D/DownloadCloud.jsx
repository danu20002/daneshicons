import React from 'react';

export const iconData = {
  id: "DownloadCloud",
  name: "DownloadCloud",
  category: "D",
  nodes: [["path",{"d":"M12 13v8l-4-4"}],["path",{"d":"m12 21 4-4"}],["path",{"d":"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"}]]
};

export const DownloadCloud = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 13v8l-4-4" />
      <path d="m12 21 4-4" />
      <path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" />
    </svg>
  );
};

export default DownloadCloud;
