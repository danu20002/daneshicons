import React from 'react';

export const iconData = {
  id: "Haze",
  name: "Haze",
  category: "H",
  nodes: [["path",{"d":"m5.2 6.2 1.4 1.4"}],["path",{"d":"M2 13h2"}],["path",{"d":"M20 13h2"}],["path",{"d":"m17.4 7.6 1.4-1.4"}],["path",{"d":"M22 17H2"}],["path",{"d":"M22 21H2"}],["path",{"d":"M16 13a4 4 0 0 0-8 0"}],["path",{"d":"M12 5V2.5"}]]
};

export const Haze = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m5.2 6.2 1.4 1.4" />
      <path d="M2 13h2" />
      <path d="M20 13h2" />
      <path d="m17.4 7.6 1.4-1.4" />
      <path d="M22 17H2" />
      <path d="M22 21H2" />
      <path d="M16 13a4 4 0 0 0-8 0" />
      <path d="M12 5V2.5" />
    </svg>
  );
};

export default Haze;
