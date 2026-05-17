import React from 'react';

export const iconData = {
  id: "MouseOff",
  name: "MouseOff",
  category: "M",
  nodes: [["path",{"d":"M12 6v.343"}],["path",{"d":"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218"}],["path",{"d":"M19 13.343V9A7 7 0 0 0 8.56 2.902"}],["path",{"d":"M22 22 2 2"}]]
};

export const MouseOff = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 6v.343" />
      <path d="M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" />
      <path d="M19 13.343V9A7 7 0 0 0 8.56 2.902" />
      <path d="M22 22 2 2" />
    </svg>
  );
};

export default MouseOff;
