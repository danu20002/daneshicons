import React from 'react';

export const iconData = {
  id: "SquaresIntersect",
  name: "SquaresIntersect",
  category: "S",
  nodes: [["path",{"d":"M10 22a2 2 0 0 1-2-2"}],["path",{"d":"M14 2a2 2 0 0 1 2 2"}],["path",{"d":"M16 22h-2"}],["path",{"d":"M2 10V8"}],["path",{"d":"M2 4a2 2 0 0 1 2-2"}],["path",{"d":"M20 8a2 2 0 0 1 2 2"}],["path",{"d":"M22 14v2"}],["path",{"d":"M22 20a2 2 0 0 1-2 2"}],["path",{"d":"M4 16a2 2 0 0 1-2-2"}],["path",{"d":"M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z"}],["path",{"d":"M8 2h2"}]]
};

export const SquaresIntersect = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 22a2 2 0 0 1-2-2" />
      <path d="M14 2a2 2 0 0 1 2 2" />
      <path d="M16 22h-2" />
      <path d="M2 10V8" />
      <path d="M2 4a2 2 0 0 1 2-2" />
      <path d="M20 8a2 2 0 0 1 2 2" />
      <path d="M22 14v2" />
      <path d="M22 20a2 2 0 0 1-2 2" />
      <path d="M4 16a2 2 0 0 1-2-2" />
      <path d="M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z" />
      <path d="M8 2h2" />
    </svg>
  );
};

export default SquaresIntersect;
