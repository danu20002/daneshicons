import React from 'react';

export const iconData = {
  id: "SmartphoneNfc",
  name: "SmartphoneNfc",
  category: "S",
  nodes: [["rect",{"width":"7","height":"12","x":"2","y":"6","rx":"1"}],["path",{"d":"M13 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{"d":"M16.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{"d":"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"}]]
};

export const SmartphoneNfc = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="7" height="12" x="2" y="6" rx="1" />
      <path d="M13 8.32a7.43 7.43 0 0 1 0 7.36" />
      <path d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58" />
      <path d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
    </svg>
  );
};

export default SmartphoneNfc;
