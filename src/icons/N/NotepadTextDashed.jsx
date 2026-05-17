import React from 'react';

export const iconData = {
  id: "NotepadTextDashed",
  name: "NotepadTextDashed",
  category: "N",
  nodes: [["path",{"d":"M8 2v4"}],["path",{"d":"M12 2v4"}],["path",{"d":"M16 2v4"}],["path",{"d":"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M20 12v2"}],["path",{"d":"M20 18v2a2 2 0 0 1-2 2h-1"}],["path",{"d":"M13 22h-2"}],["path",{"d":"M7 22H6a2 2 0 0 1-2-2v-2"}],["path",{"d":"M4 14v-2"}],["path",{"d":"M4 8V6a2 2 0 0 1 2-2h2"}],["path",{"d":"M8 10h6"}],["path",{"d":"M8 14h8"}],["path",{"d":"M8 18h5"}]]
};

export const NotepadTextDashed = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M8 2v4" />
      <path d="M12 2v4" />
      <path d="M16 2v4" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M20 12v2" />
      <path d="M20 18v2a2 2 0 0 1-2 2h-1" />
      <path d="M13 22h-2" />
      <path d="M7 22H6a2 2 0 0 1-2-2v-2" />
      <path d="M4 14v-2" />
      <path d="M4 8V6a2 2 0 0 1 2-2h2" />
      <path d="M8 10h6" />
      <path d="M8 14h8" />
      <path d="M8 18h5" />
    </svg>
  );
};

export default NotepadTextDashed;
