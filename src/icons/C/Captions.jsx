import React from 'react';

export const iconData = {
  id: "Captions",
  name: "Captions",
  category: "C",
  nodes: [["rect",{"width":"18","height":"14","x":"3","y":"5","rx":"2","ry":"2"}],["path",{"d":"M7 15h4M15 15h2M7 11h2M13 11h4"}]]
};

export const Captions = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
      <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
    </svg>
  );
};

export default Captions;
