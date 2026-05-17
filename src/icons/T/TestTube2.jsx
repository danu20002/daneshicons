import React from 'react';

export const iconData = {
  id: "TestTube2",
  name: "TestTube2",
  category: "T",
  nodes: [["path",{"d":"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"}],["path",{"d":"m16 2 6 6"}],["path",{"d":"M12 16H4"}]]
};

export const TestTube2 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" />
      <path d="m16 2 6 6" />
      <path d="M12 16H4" />
    </svg>
  );
};

export default TestTube2;
