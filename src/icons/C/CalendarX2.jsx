import React from 'react';

export const iconData = {
  id: "CalendarX2",
  name: "CalendarX2",
  category: "C",
  nodes: [["path",{"d":"M8 2v4"}],["path",{"d":"M16 2v4"}],["path",{"d":"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{"d":"M3 10h18"}],["path",{"d":"m17 22 5-5"}],["path",{"d":"m17 17 5 5"}]]
};

export const CalendarX2 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
      <path d="M3 10h18" />
      <path d="m17 22 5-5" />
      <path d="m17 17 5 5" />
    </svg>
  );
};

export default CalendarX2;
