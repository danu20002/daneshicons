import React from 'react';

export const iconData = {
  id: "ShipWheel",
  name: "ShipWheel",
  category: "S",
  nodes: [["circle",{"cx":"12","cy":"12","r":"8"}],["path",{"d":"M12 2v7.5"}],["path",{"d":"m19 5-5.23 5.23"}],["path",{"d":"M22 12h-7.5"}],["path",{"d":"m19 19-5.23-5.23"}],["path",{"d":"M12 14.5V22"}],["path",{"d":"M10.23 13.77 5 19"}],["path",{"d":"M9.5 12H2"}],["path",{"d":"M10.23 10.23 5 5"}],["circle",{"cx":"12","cy":"12","r":"2.5"}]]
};

export const ShipWheel = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 2v7.5" />
      <path d="m19 5-5.23 5.23" />
      <path d="M22 12h-7.5" />
      <path d="m19 19-5.23-5.23" />
      <path d="M12 14.5V22" />
      <path d="M10.23 13.77 5 19" />
      <path d="M9.5 12H2" />
      <path d="M10.23 10.23 5 5" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
};

export default ShipWheel;
