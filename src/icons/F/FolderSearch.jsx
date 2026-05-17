import React from 'react';

export const iconData = {
  id: "FolderSearch",
  name: "FolderSearch",
  category: "F",
  nodes: [["path",{"d":"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"}],["path",{"d":"m21 21-1.9-1.9"}],["circle",{"cx":"17","cy":"17","r":"3"}]]
};

export const FolderSearch = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1" />
      <path d="m21 21-1.9-1.9" />
      <circle cx="17" cy="17" r="3" />
    </svg>
  );
};

export default FolderSearch;
