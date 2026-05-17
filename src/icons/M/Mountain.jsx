import React from 'react';

export const iconData = {
  id: "Mountain",
  name: "Mountain",
  category: "M",
  nodes: [["path",{"d":"m8 3 4 8 5-5 5 15H2L8 3z"}]]
};

export const Mountain = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
};

export default Mountain;
