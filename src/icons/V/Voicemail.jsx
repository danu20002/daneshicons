import React from 'react';

export const iconData = {
  id: "Voicemail",
  name: "Voicemail",
  category: "V",
  nodes: [["circle",{"cx":"6","cy":"12","r":"4"}],["circle",{"cx":"18","cy":"12","r":"4"}],["line",{"x1":"6","x2":"18","y1":"16","y2":"16"}]]
};

export const Voicemail = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="6" cy="12" r="4" />
      <circle cx="18" cy="12" r="4" />
      <line x1="6" x2="18" y1="16" y2="16" />
    </svg>
  );
};

export default Voicemail;
