import React from 'react';

export const iconData = {
  id: "ArrowDown",
  name: "ArrowDown",
  category: "A",
  nodes: [["path",{"d":"M12 5v14"}],["path",{"d":"m19 12-7 7-7-7"}]]
};

export const ArrowDown = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
};

export default ArrowDown;
