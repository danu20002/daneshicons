import React from 'react';

export const iconData = {
  id: "TrendingDown",
  name: "TrendingDown",
  category: "T",
  nodes: [["path",{"d":"M16 17h6v-6"}],["path",{"d":"m22 17-8.5-8.5-5 5L2 7"}]]
};

export const TrendingDown = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M16 17h6v-6" />
      <path d="m22 17-8.5-8.5-5 5L2 7" />
    </svg>
  );
};

export default TrendingDown;
