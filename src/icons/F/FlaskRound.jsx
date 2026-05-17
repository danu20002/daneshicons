import React from 'react';

export const iconData = {
  id: "FlaskRound",
  name: "FlaskRound",
  category: "F",
  nodes: [["path",{"d":"M10 2v6.292a7 7 0 1 0 4 0V2"}],["path",{"d":"M5 15h14"}],["path",{"d":"M8.5 2h7"}]]
};

export const FlaskRound = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 2v6.292a7 7 0 1 0 4 0V2" />
      <path d="M5 15h14" />
      <path d="M8.5 2h7" />
    </svg>
  );
};

export default FlaskRound;
