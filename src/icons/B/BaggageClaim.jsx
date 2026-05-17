import React from 'react';

export const iconData = {
  id: "BaggageClaim",
  name: "BaggageClaim",
  category: "B",
  nodes: [["path",{"d":"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"}],["path",{"d":"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"}],["rect",{"width":"13","height":"8","x":"8","y":"6","rx":"1"}],["circle",{"cx":"18","cy":"20","r":"2"}],["circle",{"cx":"9","cy":"20","r":"2"}]]
};

export const BaggageClaim = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" />
      <path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" />
      <rect width="13" height="8" x="8" y="6" rx="1" />
      <circle cx="18" cy="20" r="2" />
      <circle cx="9" cy="20" r="2" />
    </svg>
  );
};

export default BaggageClaim;
