import React from 'react';

export const iconData = {
  id: "Mouse",
  name: "Mouse",
  category: "M",
  nodes: [["rect",{"x":"5","y":"2","width":"14","height":"20","rx":"7"}],["path",{"d":"M12 6v4"}]]
};

export const Mouse = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect x="5" y="2" width="14" height="20" rx="7" />
      <path d="M12 6v4" />
    </svg>
  );
};

export default Mouse;
