import React from 'react';

export const iconData = {
  id: "Torus",
  name: "Torus",
  category: "T",
  nodes: [["ellipse",{"cx":"12","cy":"11","rx":"3","ry":"2"}],["ellipse",{"cx":"12","cy":"12.5","rx":"10","ry":"8.5"}]]
};

export const Torus = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <ellipse cx="12" cy="11" rx="3" ry="2" />
      <ellipse cx="12" cy="12.5" rx="10" ry="8.5" />
    </svg>
  );
};

export default Torus;
