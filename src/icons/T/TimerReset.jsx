import React from 'react';

export const iconData = {
  id: "TimerReset",
  name: "TimerReset",
  category: "T",
  nodes: [["path",{"d":"M10 2h4"}],["path",{"d":"M12 14v-4"}],["path",{"d":"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"}],["path",{"d":"M9 17H4v5"}]]
};

export const TimerReset = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 2h4" />
      <path d="M12 14v-4" />
      <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
      <path d="M9 17H4v5" />
    </svg>
  );
};

export default TimerReset;
