import React from 'react';

export const iconData = {
  id: "Frame",
  name: "Frame",
  category: "F",
  nodes: [["line",{"x1":"22","x2":"2","y1":"6","y2":"6"}],["line",{"x1":"22","x2":"2","y1":"18","y2":"18"}],["line",{"x1":"6","x2":"6","y1":"2","y2":"22"}],["line",{"x1":"18","x2":"18","y1":"2","y2":"22"}]]
};

export const Frame = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  );
};

export default Frame;
