import React from 'react';

export const iconData = {
  id: "ChessPawn",
  name: "ChessPawn",
  category: "C",
  nodes: [["path",{"d":"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"}],["path",{"d":"m14.5 10 1.5 8"}],["path",{"d":"M7 10h10"}],["path",{"d":"m8 18 1.5-8"}],["circle",{"cx":"12","cy":"6","r":"4"}]]
};

export const ChessPawn = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
      <path d="m14.5 10 1.5 8" />
      <path d="M7 10h10" />
      <path d="m8 18 1.5-8" />
      <circle cx="12" cy="6" r="4" />
    </svg>
  );
};

export default ChessPawn;
