import React from 'react';

export const iconData = {
  id: "MSquare",
  name: "MSquare",
  category: "M",
  nodes: [["path",{"d":"M8 16V8.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3V16"}],["rect",{"x":"3","y":"3","width":"18","height":"18","rx":"2"}]]
};

export const MSquare = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M8 16V8.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3V16" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  );
};

export default MSquare;
