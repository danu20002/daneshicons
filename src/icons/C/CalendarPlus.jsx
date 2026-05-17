import React from 'react';

export const iconData = {
  id: "CalendarPlus",
  name: "CalendarPlus",
  category: "C",
  nodes: [["path",{"d":"M16 19h6"}],["path",{"d":"M16 2v4"}],["path",{"d":"M19 16v6"}],["path",{"d":"M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"}],["path",{"d":"M3 10h18"}],["path",{"d":"M8 2v4"}]]
};

export const CalendarPlus = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M16 19h6" />
      <path d="M16 2v4" />
      <path d="M19 16v6" />
      <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" />
      <path d="M3 10h18" />
      <path d="M8 2v4" />
    </svg>
  );
};

export default CalendarPlus;
