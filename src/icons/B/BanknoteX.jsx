import React from 'react';

export const iconData = {
  id: "BanknoteX",
  name: "BanknoteX",
  category: "B",
  nodes: [["path",{"d":"M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"}],["path",{"d":"m17 17 5 5"}],["path",{"d":"M18 12h.01"}],["path",{"d":"m22 17-5 5"}],["path",{"d":"M6 12h.01"}],["circle",{"cx":"12","cy":"12","r":"2"}]]
};

export const BanknoteX = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
      <path d="m17 17 5 5" />
      <path d="M18 12h.01" />
      <path d="m22 17-5 5" />
      <path d="M6 12h.01" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
};

export default BanknoteX;
