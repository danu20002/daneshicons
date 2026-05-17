import React from 'react';

export const iconData = {
  id: "ScreenShareOff",
  name: "ScreenShareOff",
  category: "S",
  nodes: [["path",{"d":"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{"d":"M8 21h8"}],["path",{"d":"M12 17v4"}],["path",{"d":"m22 3-5 5"}],["path",{"d":"m17 3 5 5"}]]
};

export const ScreenShareOff = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="m22 3-5 5" />
      <path d="m17 3 5 5" />
    </svg>
  );
};

export default ScreenShareOff;
