import React from 'react';

export const iconData = {
  id: "Mic",
  name: "Mic",
  category: "M",
  nodes: [["path",{"d":"M12 19v3"}],["path",{"d":"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{"x":"9","y":"2","width":"6","height":"13","rx":"3"}]]
};

export const Mic = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 19v3" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <rect x="9" y="2" width="6" height="13" rx="3" />
    </svg>
  );
};

export default Mic;
