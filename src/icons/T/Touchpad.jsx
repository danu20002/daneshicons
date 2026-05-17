import React from 'react';

export const iconData = {
  id: "Touchpad",
  name: "Touchpad",
  category: "T",
  nodes: [["rect",{"width":"20","height":"16","x":"2","y":"4","rx":"2"}],["path",{"d":"M2 14h20"}],["path",{"d":"M12 20v-6"}]]
};

export const Touchpad = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M2 14h20" />
      <path d="M12 20v-6" />
    </svg>
  );
};

export default Touchpad;
