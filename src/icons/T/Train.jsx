import React from 'react';

export const iconData = {
  id: "Train",
  name: "Train",
  category: "T",
  nodes: [["rect",{"width":"16","height":"16","x":"4","y":"3","rx":"2"}],["path",{"d":"M4 11h16"}],["path",{"d":"M12 3v8"}],["path",{"d":"m8 19-2 3"}],["path",{"d":"m18 22-2-3"}],["path",{"d":"M8 15h.01"}],["path",{"d":"M16 15h.01"}]]
};

export const Train = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="16" height="16" x="4" y="3" rx="2" />
      <path d="M4 11h16" />
      <path d="M12 3v8" />
      <path d="m8 19-2 3" />
      <path d="m18 22-2-3" />
      <path d="M8 15h.01" />
      <path d="M16 15h.01" />
    </svg>
  );
};

export default Train;
