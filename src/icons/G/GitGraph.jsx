import React from 'react';

export const iconData = {
  id: "GitGraph",
  name: "GitGraph",
  category: "G",
  nodes: [["circle",{"cx":"5","cy":"6","r":"3"}],["path",{"d":"M5 9v6"}],["circle",{"cx":"5","cy":"18","r":"3"}],["path",{"d":"M12 3v18"}],["circle",{"cx":"19","cy":"6","r":"3"}],["path",{"d":"M16 15.7A9 9 0 0 0 19 9"}]]
};

export const GitGraph = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  );
};

export default GitGraph;
