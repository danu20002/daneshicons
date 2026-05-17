import React from 'react';

export const iconData = {
  id: "PhilippinePeso",
  name: "PhilippinePeso",
  category: "P",
  nodes: [["path",{"d":"M20 11H4"}],["path",{"d":"M20 7H4"}],["path",{"d":"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"}]]
};

export const PhilippinePeso = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M20 11H4" />
      <path d="M20 7H4" />
      <path d="M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" />
    </svg>
  );
};

export default PhilippinePeso;
