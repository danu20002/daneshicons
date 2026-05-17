import React from 'react';

export const iconData = {
  id: "Option",
  name: "Option",
  category: "O",
  nodes: [["path",{"d":"M3 3h6l6 18h6"}],["path",{"d":"M14 3h7"}]]
};

export const Option = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 3h6l6 18h6" />
      <path d="M14 3h7" />
    </svg>
  );
};

export default Option;
