import React from 'react';

export const iconData = {
  id: "GitCommitVertical",
  name: "GitCommitVertical",
  category: "G",
  nodes: [["path",{"d":"M12 3v6"}],["circle",{"cx":"12","cy":"12","r":"3"}],["path",{"d":"M12 15v6"}]]
};

export const GitCommitVertical = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 3v6" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 15v6" />
    </svg>
  );
};

export default GitCommitVertical;
