import React from 'react';

export const iconData = {
  id: "FlipHorizontal2",
  name: "FlipHorizontal2",
  category: "F",
  nodes: [["path",{"d":"m3 7 5 5-5 5V7"}],["path",{"d":"m21 7-5 5 5 5V7"}],["path",{"d":"M12 20v2"}],["path",{"d":"M12 14v2"}],["path",{"d":"M12 8v2"}],["path",{"d":"M12 2v2"}]]
};

export const FlipHorizontal2 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m3 7 5 5-5 5V7" />
      <path d="m21 7-5 5 5 5V7" />
      <path d="M12 20v2" />
      <path d="M12 14v2" />
      <path d="M12 8v2" />
      <path d="M12 2v2" />
    </svg>
  );
};

export default FlipHorizontal2;
