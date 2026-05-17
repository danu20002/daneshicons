import React from 'react';

export const iconData = {
  id: "Sliders",
  name: "Sliders",
  category: "S",
  nodes: [["path",{"d":"M10 8h4"}],["path",{"d":"M12 21v-9"}],["path",{"d":"M12 8V3"}],["path",{"d":"M17 16h4"}],["path",{"d":"M19 12V3"}],["path",{"d":"M19 21v-5"}],["path",{"d":"M3 14h4"}],["path",{"d":"M5 10V3"}],["path",{"d":"M5 21v-7"}]]
};

export const Sliders = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 8h4" />
      <path d="M12 21v-9" />
      <path d="M12 8V3" />
      <path d="M17 16h4" />
      <path d="M19 12V3" />
      <path d="M19 21v-5" />
      <path d="M3 14h4" />
      <path d="M5 10V3" />
      <path d="M5 21v-7" />
    </svg>
  );
};

export default Sliders;
