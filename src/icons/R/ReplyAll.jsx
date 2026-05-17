import React from 'react';

export const iconData = {
  id: "ReplyAll",
  name: "ReplyAll",
  category: "R",
  nodes: [["path",{"d":"m12 17-5-5 5-5"}],["path",{"d":"M22 18v-2a4 4 0 0 0-4-4H7"}],["path",{"d":"m7 17-5-5 5-5"}]]
};

export const ReplyAll = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m12 17-5-5 5-5" />
      <path d="M22 18v-2a4 4 0 0 0-4-4H7" />
      <path d="m7 17-5-5 5-5" />
    </svg>
  );
};

export default ReplyAll;
