import React from 'react';

export const iconData = {
  id: "BookType",
  name: "BookType",
  category: "B",
  nodes: [["path",{"d":"M10 13h4"}],["path",{"d":"M12 6v7"}],["path",{"d":"M16 8V6H8v2"}],["path",{"d":"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]]
};

export const BookType = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 13h4" />
      <path d="M12 6v7" />
      <path d="M16 8V6H8v2" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </svg>
  );
};

export default BookType;
