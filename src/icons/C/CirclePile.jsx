import React from 'react';

export const iconData = {
  id: "CirclePile",
  name: "CirclePile",
  category: "C",
  nodes: [["circle",{"cx":"12","cy":"19","r":"2"}],["circle",{"cx":"12","cy":"5","r":"2"}],["circle",{"cx":"16","cy":"12","r":"2"}],["circle",{"cx":"20","cy":"19","r":"2"}],["circle",{"cx":"4","cy":"19","r":"2"}],["circle",{"cx":"8","cy":"12","r":"2"}]]
};

export const CirclePile = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12" cy="19" r="2" />
      <circle cx="12" cy="5" r="2" />
      <circle cx="16" cy="12" r="2" />
      <circle cx="20" cy="19" r="2" />
      <circle cx="4" cy="19" r="2" />
      <circle cx="8" cy="12" r="2" />
    </svg>
  );
};

export default CirclePile;
