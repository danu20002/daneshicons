import React from 'react';

export const iconData = {
  id: "EarthLock",
  name: "EarthLock",
  category: "E",
  nodes: [["path",{"d":"M7 3.34V5a3 3 0 0 0 3 3"}],["path",{"d":"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["path",{"d":"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{"d":"M12 2a10 10 0 1 0 9.54 13"}],["path",{"d":"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{"width":"8","height":"5","x":"14","y":"6","rx":"1"}]]
};

export const EarthLock = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M7 3.34V5a3 3 0 0 0 3 3" />
      <path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
      <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
      <path d="M12 2a10 10 0 1 0 9.54 13" />
      <path d="M20 6V4a2 2 0 1 0-4 0v2" />
      <rect width="8" height="5" x="14" y="6" rx="1" />
    </svg>
  );
};

export default EarthLock;
