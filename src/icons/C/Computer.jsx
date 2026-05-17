import React from 'react';

export const iconData = {
  id: "Computer",
  name: "Computer",
  category: "C",
  nodes: [["rect",{"width":"14","height":"8","x":"5","y":"2","rx":"2"}],["rect",{"width":"20","height":"8","x":"2","y":"14","rx":"2"}],["path",{"d":"M6 18h2"}],["path",{"d":"M12 18h6"}]]
};

export const Computer = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  );
};

export default Computer;
