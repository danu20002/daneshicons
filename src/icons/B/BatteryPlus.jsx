import React from 'react';

export const iconData = {
  id: "BatteryPlus",
  name: "BatteryPlus",
  category: "B",
  nodes: [["path",{"d":"M10 9v6"}],["path",{"d":"M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605"}],["path",{"d":"M22 14v-4"}],["path",{"d":"M7 12h6"}],["path",{"d":"M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606"}]]
};

export const BatteryPlus = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 9v6" />
      <path d="M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605" />
      <path d="M22 14v-4" />
      <path d="M7 12h6" />
      <path d="M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606" />
    </svg>
  );
};

export default BatteryPlus;
