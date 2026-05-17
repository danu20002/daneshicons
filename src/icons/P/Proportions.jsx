import React from 'react';

export const iconData = {
  id: "Proportions",
  name: "Proportions",
  category: "P",
  nodes: [["rect",{"width":"20","height":"16","x":"2","y":"4","rx":"2"}],["path",{"d":"M12 9v11"}],["path",{"d":"M2 9h13a2 2 0 0 1 2 2v9"}]]
};

export const Proportions = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M12 9v11" />
      <path d="M2 9h13a2 2 0 0 1 2 2v9" />
    </svg>
  );
};

export default Proportions;
