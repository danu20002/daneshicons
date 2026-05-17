import React from 'react';

export const iconData = {
  id: "ClipboardCopy",
  name: "ClipboardCopy",
  category: "C",
  nodes: [["rect",{"width":"8","height":"4","x":"8","y":"2","rx":"1","ry":"1"}],["path",{"d":"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"}],["path",{"d":"M16 4h2a2 2 0 0 1 2 2v4"}],["path",{"d":"M21 14H11"}],["path",{"d":"m15 10-4 4 4 4"}]]
};

export const ClipboardCopy = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v4" />
      <path d="M21 14H11" />
      <path d="m15 10-4 4 4 4" />
    </svg>
  );
};

export default ClipboardCopy;
