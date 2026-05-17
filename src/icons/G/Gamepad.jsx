import React from 'react';

export const iconData = {
  id: "Gamepad",
  name: "Gamepad",
  category: "G",
  nodes: [["line",{"x1":"6","x2":"10","y1":"12","y2":"12"}],["line",{"x1":"8","x2":"8","y1":"10","y2":"14"}],["line",{"x1":"15","x2":"15.01","y1":"13","y2":"13"}],["line",{"x1":"18","x2":"18.01","y1":"11","y2":"11"}],["rect",{"width":"20","height":"12","x":"2","y":"6","rx":"2"}]]
};

export const Gamepad = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
};

export default Gamepad;
