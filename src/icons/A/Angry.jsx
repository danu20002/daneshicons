import React from 'react';

export const iconData = {
  id: "Angry",
  name: "Angry",
  category: "A",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M16 16s-1.5-2-4-2-4 2-4 2"}],["path",{"d":"M7.5 8 10 9"}],["path",{"d":"m14 9 2.5-1"}],["path",{"d":"M9 10h.01"}],["path",{"d":"M15 10h.01"}]]
};

export const Angry = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <path d="M7.5 8 10 9" />
      <path d="m14 9 2.5-1" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
    </svg>
  );
};

export default Angry;
