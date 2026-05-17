import React from 'react';

export const iconData = {
  id: "Sheet",
  name: "Sheet",
  category: "S",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2","ry":"2"}],["line",{"x1":"3","x2":"21","y1":"9","y2":"9"}],["line",{"x1":"3","x2":"21","y1":"15","y2":"15"}],["line",{"x1":"9","x2":"9","y1":"9","y2":"21"}],["line",{"x1":"15","x2":"15","y1":"9","y2":"21"}]]
};

export const Sheet = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="3" x2="21" y1="15" y2="15" />
      <line x1="9" x2="9" y1="9" y2="21" />
      <line x1="15" x2="15" y1="9" y2="21" />
    </svg>
  );
};

export default Sheet;
