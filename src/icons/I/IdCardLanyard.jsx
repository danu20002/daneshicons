import React from 'react';

export const iconData = {
  id: "IdCardLanyard",
  name: "IdCardLanyard",
  category: "I",
  nodes: [["path",{"d":"M13.5 8h-3"}],["path",{"d":"m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3"}],["path",{"d":"M16.899 22A5 5 0 0 0 7.1 22"}],["path",{"d":"m9 2 3 6"}],["circle",{"cx":"12","cy":"15","r":"3"}]]
};

export const IdCardLanyard = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M13.5 8h-3" />
      <path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" />
      <path d="M16.899 22A5 5 0 0 0 7.1 22" />
      <path d="m9 2 3 6" />
      <circle cx="12" cy="15" r="3" />
    </svg>
  );
};

export default IdCardLanyard;
