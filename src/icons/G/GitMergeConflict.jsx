import React from 'react';

export const iconData = {
  id: "GitMergeConflict",
  name: "GitMergeConflict",
  category: "G",
  nodes: [["path",{"d":"M12 6h4a2 2 0 0 1 2 2v7"}],["path",{"d":"M6 12v9"}],["path",{"d":"M9 3 3 9"}],["path",{"d":"M9 9 3 3"}],["circle",{"cx":"18","cy":"18","r":"3"}]]
};

export const GitMergeConflict = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 6h4a2 2 0 0 1 2 2v7" />
      <path d="M6 12v9" />
      <path d="M9 3 3 9" />
      <path d="M9 9 3 3" />
      <circle cx="18" cy="18" r="3" />
    </svg>
  );
};

export default GitMergeConflict;
