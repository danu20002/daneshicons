import React from 'react';

export const iconData = {
  id: "MoveUp",
  name: "MoveUp",
  category: "M",
  nodes: [["path",{"d":"M8 6L12 2L16 6"}],["path",{"d":"M12 2V22"}]]
};

export const MoveUp = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M8 6L12 2L16 6" />
      <path d="M12 2V22" />
    </svg>
  );
};

export default MoveUp;
