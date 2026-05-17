import React from 'react';

export const iconData = {
  id: "FishingRod",
  name: "FishingRod",
  category: "F",
  nodes: [["path",{"d":"M4 11h1"}],["path",{"d":"M8 15a2 2 0 0 1-4 0V3a1 1 0 0 1 1-1h.5C14 2 20 9 20 18v4"}],["circle",{"cx":"18","cy":"18","r":"2"}]]
};

export const FishingRod = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M4 11h1" />
      <path d="M8 15a2 2 0 0 1-4 0V3a1 1 0 0 1 1-1h.5C14 2 20 9 20 18v4" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  );
};

export default FishingRod;
