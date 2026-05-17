import React from 'react';

export const iconData = {
  id: "StickyNoteOff",
  name: "StickyNoteOff",
  category: "S",
  nodes: [["path",{"d":"M15 3v5a1 1 0 0 0 1 1h5"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M3.586 3.586A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.414-.586"}],["path",{"d":"M8.656 3H15a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 21 9v6.344"}]]
};

export const StickyNoteOff = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M15 3v5a1 1 0 0 0 1 1h5" />
      <path d="m2 2 20 20" />
      <path d="M3.586 3.586A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.414-.586" />
      <path d="M8.656 3H15a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 21 9v6.344" />
    </svg>
  );
};

export default StickyNoteOff;
