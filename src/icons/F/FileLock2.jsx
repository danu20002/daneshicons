import React from 'react';

export const iconData = {
  id: "FileLock2",
  name: "FileLock2",
  category: "F",
  nodes: [["path",{"d":"M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3"}],["path",{"d":"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{"d":"M9 17v-2a2 2 0 0 0-4 0v2"}],["rect",{"width":"8","height":"5","x":"3","y":"17","rx":"1"}]]
};

export const FileLock2 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M9 17v-2a2 2 0 0 0-4 0v2" />
      <rect width="8" height="5" x="3" y="17" rx="1" />
    </svg>
  );
};

export default FileLock2;
