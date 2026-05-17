import React from 'react';

export const iconData = {
  id: "Merge",
  name: "Merge",
  category: "M",
  nodes: [["path",{"d":"m8 6 4-4 4 4"}],["path",{"d":"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}],["path",{"d":"m20 22-5-5"}]]
};

export const Merge = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  );
};

export default Merge;
