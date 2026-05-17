import React from 'react';

export const iconData = {
  id: "CalendarArrowUp",
  name: "CalendarArrowUp",
  category: "C",
  nodes: [["path",{"d":"m14 18 4-4 4 4"}],["path",{"d":"M16 2v4"}],["path",{"d":"M18 22v-8"}],["path",{"d":"M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"}],["path",{"d":"M3 10h18"}],["path",{"d":"M8 2v4"}]]
};

export const CalendarArrowUp = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m14 18 4-4 4 4" />
      <path d="M16 2v4" />
      <path d="M18 22v-8" />
      <path d="M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9" />
      <path d="M3 10h18" />
      <path d="M8 2v4" />
    </svg>
  );
};

export default CalendarArrowUp;
