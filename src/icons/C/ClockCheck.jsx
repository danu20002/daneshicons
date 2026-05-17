import React from 'react';

export const iconData = {
  id: "ClockCheck",
  name: "ClockCheck",
  category: "C",
  nodes: [["path",{"d":"M12 6v6l4 2"}],["path",{"d":"M22 12a10 10 0 1 0-11 9.95"}],["path",{"d":"m22 16-5.5 5.5L14 19"}]]
};

export const ClockCheck = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 6v6l4 2" />
      <path d="M22 12a10 10 0 1 0-11 9.95" />
      <path d="m22 16-5.5 5.5L14 19" />
    </svg>
  );
};

export default ClockCheck;
