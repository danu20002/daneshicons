import React from 'react';

export const iconData = {
  id: "Tv",
  name: "Tv",
  category: "T",
  nodes: [["path",{"d":"m17 2-5 5-5-5"}],["rect",{"width":"20","height":"15","x":"2","y":"7","rx":"2"}]]
};

export const Tv = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m17 2-5 5-5-5" />
      <rect width="20" height="15" x="2" y="7" rx="2" />
    </svg>
  );
};

export default Tv;
