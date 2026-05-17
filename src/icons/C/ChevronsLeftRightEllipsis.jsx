import React from 'react';

export const iconData = {
  id: "ChevronsLeftRightEllipsis",
  name: "ChevronsLeftRightEllipsis",
  category: "C",
  nodes: [["path",{"d":"M12 12h.01"}],["path",{"d":"M16 12h.01"}],["path",{"d":"m17 7 5 5-5 5"}],["path",{"d":"m7 7-5 5 5 5"}],["path",{"d":"M8 12h.01"}]]
};

export const ChevronsLeftRightEllipsis = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
      <path d="m17 7 5 5-5 5" />
      <path d="m7 7-5 5 5 5" />
      <path d="M8 12h.01" />
    </svg>
  );
};

export default ChevronsLeftRightEllipsis;
