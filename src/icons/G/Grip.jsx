import React from 'react';

export const iconData = {
  id: "Grip",
  name: "Grip",
  category: "G",
  nodes: [["circle",{"cx":"12","cy":"5","r":"1"}],["circle",{"cx":"19","cy":"5","r":"1"}],["circle",{"cx":"5","cy":"5","r":"1"}],["circle",{"cx":"12","cy":"12","r":"1"}],["circle",{"cx":"19","cy":"12","r":"1"}],["circle",{"cx":"5","cy":"12","r":"1"}],["circle",{"cx":"12","cy":"19","r":"1"}],["circle",{"cx":"19","cy":"19","r":"1"}],["circle",{"cx":"5","cy":"19","r":"1"}]]
};

export const Grip = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12" cy="5" r="1" />
      <circle cx="19" cy="5" r="1" />
      <circle cx="5" cy="5" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="19" r="1" />
      <circle cx="19" cy="19" r="1" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  );
};

export default Grip;
