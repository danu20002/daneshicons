import React from 'react';

export const iconData = {
  id: "SignalZero",
  name: "SignalZero",
  category: "S",
  nodes: [["path",{"d":"M2 20h.01"}]]
};

export const SignalZero = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 20h.01" />
    </svg>
  );
};

export default SignalZero;
