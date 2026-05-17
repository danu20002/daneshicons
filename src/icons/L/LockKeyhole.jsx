import React from 'react';

export const iconData = {
  id: "LockKeyhole",
  name: "LockKeyhole",
  category: "L",
  nodes: [["circle",{"cx":"12","cy":"16","r":"1"}],["rect",{"x":"3","y":"10","width":"18","height":"12","rx":"2"}],["path",{"d":"M7 10V7a5 5 0 0 1 10 0v3"}]]
};

export const LockKeyhole = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12" cy="16" r="1" />
      <rect x="3" y="10" width="18" height="12" rx="2" />
      <path d="M7 10V7a5 5 0 0 1 10 0v3" />
    </svg>
  );
};

export default LockKeyhole;
