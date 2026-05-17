import React from 'react';

export const iconData = {
  id: "SignpostBig",
  name: "SignpostBig",
  category: "S",
  nodes: [["path",{"d":"M10 9H4L2 7l2-2h6"}],["path",{"d":"M14 5h6l2 2-2 2h-6"}],["path",{"d":"M10 22V4a2 2 0 1 1 4 0v18"}],["path",{"d":"M8 22h8"}]]
};

export const SignpostBig = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 9H4L2 7l2-2h6" />
      <path d="M14 5h6l2 2-2 2h-6" />
      <path d="M10 22V4a2 2 0 1 1 4 0v18" />
      <path d="M8 22h8" />
    </svg>
  );
};

export default SignpostBig;
