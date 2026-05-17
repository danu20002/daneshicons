import React from 'react';

export const iconData = {
  id: "WeightTilde",
  name: "WeightTilde",
  category: "W",
  nodes: [["path",{"d":"M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z"}],["path",{"d":"M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0"}],["circle",{"cx":"12","cy":"5","r":"3"}]]
};

export const WeightTilde = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z" />
      <path d="M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0" />
      <circle cx="12" cy="5" r="3" />
    </svg>
  );
};

export default WeightTilde;
