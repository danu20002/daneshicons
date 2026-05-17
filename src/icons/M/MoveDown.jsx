import React from 'react';

export const iconData = {
  id: "MoveDown",
  name: "MoveDown",
  category: "M",
  nodes: [["path",{"d":"M8 18L12 22L16 18"}],["path",{"d":"M12 2V22"}]]
};

export const MoveDown = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M8 18L12 22L16 18" />
      <path d="M12 2V22" />
    </svg>
  );
};

export default MoveDown;
