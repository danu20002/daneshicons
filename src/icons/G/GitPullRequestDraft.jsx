import React from 'react';

export const iconData = {
  id: "GitPullRequestDraft",
  name: "GitPullRequestDraft",
  category: "G",
  nodes: [["circle",{"cx":"18","cy":"18","r":"3"}],["circle",{"cx":"6","cy":"6","r":"3"}],["path",{"d":"M18 6V5"}],["path",{"d":"M18 11v-1"}],["line",{"x1":"6","x2":"6","y1":"9","y2":"21"}]]
};

export const GitPullRequestDraft = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M18 6V5" />
      <path d="M18 11v-1" />
      <line x1="6" x2="6" y1="9" y2="21" />
    </svg>
  );
};

export default GitPullRequestDraft;
