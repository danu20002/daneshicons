import React from 'react';

export const iconData = {
  id: "GitPullRequestCreate",
  name: "GitPullRequestCreate",
  category: "G",
  nodes: [["circle",{"cx":"6","cy":"6","r":"3"}],["path",{"d":"M6 9v12"}],["path",{"d":"M13 6h3a2 2 0 0 1 2 2v3"}],["path",{"d":"M18 15v6"}],["path",{"d":"M21 18h-6"}]]
};

export const GitPullRequestCreate = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="6" cy="6" r="3" />
      <path d="M6 9v12" />
      <path d="M13 6h3a2 2 0 0 1 2 2v3" />
      <path d="M18 15v6" />
      <path d="M21 18h-6" />
    </svg>
  );
};

export default GitPullRequestCreate;
