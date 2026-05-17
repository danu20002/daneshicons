import React from 'react';

export const iconData = {
  id: "Calendar1",
  name: "Calendar1",
  category: "C",
  nodes: [["path",{"d":"M11 14h1v4"}],["path",{"d":"M16 2v4"}],["path",{"d":"M3 10h18"}],["path",{"d":"M8 2v4"}],["rect",{"x":"3","y":"4","width":"18","height":"18","rx":"2"}]]
};

export const Calendar1 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M11 14h1v4" />
      <path d="M16 2v4" />
      <path d="M3 10h18" />
      <path d="M8 2v4" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
    </svg>
  );
};

export default Calendar1;
