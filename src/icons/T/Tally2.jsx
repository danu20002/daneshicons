import React from 'react';

export const iconData = {
  id: "Tally2",
  name: "Tally2",
  category: "T",
  nodes: [["path",{"d":"M4 4v16"}],["path",{"d":"M9 4v16"}]]
};

export const Tally2 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M4 4v16" />
      <path d="M9 4v16" />
    </svg>
  );
};

export default Tally2;
