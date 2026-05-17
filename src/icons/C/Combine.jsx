import React from 'react';

export const iconData = {
  id: "Combine",
  name: "Combine",
  category: "C",
  nodes: [["path",{"d":"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{"d":"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{"d":"m7 15 3 3"}],["path",{"d":"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{"x":"14","y":"14","width":"7","height":"7","rx":"1"}],["rect",{"x":"3","y":"3","width":"7","height":"7","rx":"1"}]]
};

export const Combine = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
      <path d="M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
      <path d="m7 15 3 3" />
      <path d="m7 21 3-3H5a2 2 0 0 1-2-2v-2" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="3" width="7" height="7" rx="1" />
    </svg>
  );
};

export default Combine;
