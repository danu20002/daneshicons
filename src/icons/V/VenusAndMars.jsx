import React from 'react';

export const iconData = {
  id: "VenusAndMars",
  name: "VenusAndMars",
  category: "V",
  nodes: [["path",{"d":"M10 20h4"}],["path",{"d":"M12 16v6"}],["path",{"d":"M17 2h4v4"}],["path",{"d":"m21 2-5.46 5.46"}],["circle",{"cx":"12","cy":"11","r":"5"}]]
};

export const VenusAndMars = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 20h4" />
      <path d="M12 16v6" />
      <path d="M17 2h4v4" />
      <path d="m21 2-5.46 5.46" />
      <circle cx="12" cy="11" r="5" />
    </svg>
  );
};

export default VenusAndMars;
