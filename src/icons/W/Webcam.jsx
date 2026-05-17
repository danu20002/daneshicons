import React from 'react';

export const iconData = {
  id: "Webcam",
  name: "Webcam",
  category: "W",
  nodes: [["circle",{"cx":"12","cy":"10","r":"8"}],["circle",{"cx":"12","cy":"10","r":"3"}],["path",{"d":"M7 22h10"}],["path",{"d":"M12 22v-4"}]]
};

export const Webcam = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  );
};

export default Webcam;
