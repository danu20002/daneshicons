import React from 'react';

export const iconData = {
  id: "BellElectric",
  name: "BellElectric",
  category: "B",
  nodes: [["path",{"d":"M18.518 17.347A7 7 0 0 1 14 19"}],["path",{"d":"M18.8 4A11 11 0 0 1 20 9"}],["path",{"d":"M9 9h.01"}],["circle",{"cx":"20","cy":"16","r":"2"}],["circle",{"cx":"9","cy":"9","r":"7"}],["rect",{"x":"4","y":"16","width":"10","height":"6","rx":"2"}]]
};

export const BellElectric = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M18.518 17.347A7 7 0 0 1 14 19" />
      <path d="M18.8 4A11 11 0 0 1 20 9" />
      <path d="M9 9h.01" />
      <circle cx="20" cy="16" r="2" />
      <circle cx="9" cy="9" r="7" />
      <rect x="4" y="16" width="10" height="6" rx="2" />
    </svg>
  );
};

export default BellElectric;
