import React from 'react';

export const iconData = {
  id: "LampCeiling",
  name: "LampCeiling",
  category: "L",
  nodes: [["path",{"d":"M12 2v5"}],["path",{"d":"M14.829 15.998a3 3 0 1 1-5.658 0"}],["path",{"d":"M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z"}]]
};

export const LampCeiling = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 2v5" />
      <path d="M14.829 15.998a3 3 0 1 1-5.658 0" />
      <path d="M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z" />
    </svg>
  );
};

export default LampCeiling;
