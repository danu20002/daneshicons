import React from 'react';

export const iconData = {
  id: "FolderGit2",
  name: "FolderGit2",
  category: "F",
  nodes: [["path",{"d":"M18 19a5 5 0 0 1-5-5v8"}],["path",{"d":"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"}],["circle",{"cx":"13","cy":"12","r":"2"}],["circle",{"cx":"20","cy":"19","r":"2"}]]
};

export const FolderGit2 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M18 19a5 5 0 0 1-5-5v8" />
      <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" />
      <circle cx="13" cy="12" r="2" />
      <circle cx="20" cy="19" r="2" />
    </svg>
  );
};

export default FolderGit2;
