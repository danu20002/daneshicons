import React from 'react';

export const iconData = {
  id: "Lasso",
  name: "Lasso",
  category: "L",
  nodes: [["path",{"d":"M3.704 14.467a10 8 0 1 1 3.115 2.375"}],["path",{"d":"M7 22a5 5 0 0 1-2-3.994"}],["circle",{"cx":"5","cy":"16","r":"2"}]]
};

export const Lasso = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3.704 14.467a10 8 0 1 1 3.115 2.375" />
      <path d="M7 22a5 5 0 0 1-2-3.994" />
      <circle cx="5" cy="16" r="2" />
    </svg>
  );
};

export default Lasso;
