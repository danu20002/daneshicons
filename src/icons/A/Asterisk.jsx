import React from 'react';

export const iconData = {
  id: "Asterisk",
  name: "Asterisk",
  category: "A",
  nodes: [["path",{"d":"M12 6v12"}],["path",{"d":"M17.196 9 6.804 15"}],["path",{"d":"m6.804 9 10.392 6"}]]
};

export const Asterisk = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 6v12" />
      <path d="M17.196 9 6.804 15" />
      <path d="m6.804 9 10.392 6" />
    </svg>
  );
};

export default Asterisk;
