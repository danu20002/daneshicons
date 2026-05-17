import React from 'react';

export const iconData = {
  id: "SquaresSubtract",
  name: "SquaresSubtract",
  category: "S",
  nodes: [["path",{"d":"M10 22a2 2 0 0 1-2-2"}],["path",{"d":"M16 22h-2"}],["path",{"d":"M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z"}],["path",{"d":"M20 8a2 2 0 0 1 2 2"}],["path",{"d":"M22 14v2"}],["path",{"d":"M22 20a2 2 0 0 1-2 2"}]]
};

export const SquaresSubtract = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M16 22h-2" />
      <path d="M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z" />
      <path d="M20 8a2 2 0 0 1 2 2" />
      <path d="M22 14v2" />
      <path d="M22 20a2 2 0 0 1-2 2" />
    </svg>
  );
};

export default SquaresSubtract;
