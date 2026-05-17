import React from 'react';

export const iconData = {
  id: "ChessRook",
  name: "ChessRook",
  category: "C",
  nodes: [["path",{"d":"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"}],["path",{"d":"M10 2v2"}],["path",{"d":"M14 2v2"}],["path",{"d":"m17 18-1-9"}],["path",{"d":"M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2"}],["path",{"d":"M6 4h12"}],["path",{"d":"m7 18 1-9"}]]
};

export const ChessRook = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="m17 18-1-9" />
      <path d="M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2" />
      <path d="M6 4h12" />
      <path d="m7 18 1-9" />
    </svg>
  );
};

export default ChessRook;
