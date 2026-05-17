import React from 'react';

export const iconData = {
  id: "GaugeCircle",
  name: "GaugeCircle",
  category: "G",
  nodes: [["path",{"d":"M15.6 2.7a10 10 0 1 0 5.7 5.7"}],["circle",{"cx":"12","cy":"12","r":"2"}],["path",{"d":"M13.4 10.6 19 5"}]]
};

export const GaugeCircle = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M15.6 2.7a10 10 0 1 0 5.7 5.7" />
      <circle cx="12" cy="12" r="2" />
      <path d="M13.4 10.6 19 5" />
    </svg>
  );
};

export default GaugeCircle;
