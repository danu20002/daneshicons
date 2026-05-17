import React from 'react';

export const iconData = {
  id: "CigaretteOff",
  name: "CigaretteOff",
  category: "C",
  nodes: [["path",{"d":"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13"}],["path",{"d":"M18 8c0-2.5-2-2.5-2-5"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866"}],["path",{"d":"M22 8c0-2.5-2-2.5-2-5"}],["path",{"d":"M7 12v4"}]]
};

export const CigaretteOff = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" />
      <path d="M18 8c0-2.5-2-2.5-2-5" />
      <path d="m2 2 20 20" />
      <path d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" />
      <path d="M22 8c0-2.5-2-2.5-2-5" />
      <path d="M7 12v4" />
    </svg>
  );
};

export default CigaretteOff;
