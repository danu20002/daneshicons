import React from 'react';

export const iconData = {
  id: "NotebookTabs",
  name: "NotebookTabs",
  category: "N",
  nodes: [["path",{"d":"M2 6h4"}],["path",{"d":"M2 10h4"}],["path",{"d":"M2 14h4"}],["path",{"d":"M2 18h4"}],["rect",{"width":"16","height":"20","x":"4","y":"2","rx":"2"}],["path",{"d":"M15 2v20"}],["path",{"d":"M15 7h5"}],["path",{"d":"M15 12h5"}],["path",{"d":"M15 17h5"}]]
};

export const NotebookTabs = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M15 2v20" />
      <path d="M15 7h5" />
      <path d="M15 12h5" />
      <path d="M15 17h5" />
    </svg>
  );
};

export default NotebookTabs;
