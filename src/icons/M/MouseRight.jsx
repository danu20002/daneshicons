import React from 'react';

export const iconData = {
  id: "MouseRight",
  name: "MouseRight",
  category: "M",
  nodes: [["path",{"d":"M12 7.318V10"}],["path",{"d":"M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7"}],["circle",{"cx":"17","cy":"4","r":"2"}]]
};

export const MouseRight = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 7.318V10" />
      <path d="M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7" />
      <circle cx="17" cy="4" r="2" />
    </svg>
  );
};

export default MouseRight;
