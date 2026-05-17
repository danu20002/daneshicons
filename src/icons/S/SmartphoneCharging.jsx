import React from 'react';

export const iconData = {
  id: "SmartphoneCharging",
  name: "SmartphoneCharging",
  category: "S",
  nodes: [["rect",{"width":"14","height":"20","x":"5","y":"2","rx":"2","ry":"2"}],["path",{"d":"M12.667 8 10 12h4l-2.667 4"}]]
};

export const SmartphoneCharging = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12.667 8 10 12h4l-2.667 4" />
    </svg>
  );
};

export default SmartphoneCharging;
