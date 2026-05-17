import React from 'react';

export const iconData = {
  id: "SlashSquare",
  name: "SlashSquare",
  category: "S",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["line",{"x1":"9","x2":"15","y1":"15","y2":"9"}]]
};

export const SlashSquare = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <line x1="9" x2="15" y1="15" y2="9" />
    </svg>
  );
};

export default SlashSquare;
