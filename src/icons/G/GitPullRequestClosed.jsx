import React from 'react';

export const iconData = {
  id: "GitPullRequestClosed",
  name: "GitPullRequestClosed",
  category: "G",
  nodes: [["circle",{"cx":"6","cy":"6","r":"3"}],["path",{"d":"M6 9v12"}],["path",{"d":"m21 3-6 6"}],["path",{"d":"m21 9-6-6"}],["path",{"d":"M18 11.5V15"}],["circle",{"cx":"18","cy":"18","r":"3"}]]
};

export const GitPullRequestClosed = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="m21 3-6 6" />
      <path d="m21 9-6-6" />
      <path d="M18 11.5V15" />
      <circle cx="18" cy="18" r="3" />
    </svg>
  );
};

export default GitPullRequestClosed;
