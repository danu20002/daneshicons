import React from 'react';

export const iconData = {
  id: "FileMinusCorner",
  name: "FileMinusCorner",
  category: "F",
  nodes: [["path",{"d":"M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12"}],["path",{"d":"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{"d":"M14 18h6"}]]
};

export const FileMinusCorner = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M14 18h6" />
    </svg>
  );
};

export default FileMinusCorner;
