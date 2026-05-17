import React from 'react';

export const iconData = {
  id: "BookSearch",
  name: "BookSearch",
  category: "B",
  nodes: [["path",{"d":"M11 22H5.5a1 1 0 0 1 0-5h4.501"}],["path",{"d":"m21 22-1.879-1.878"}],["path",{"d":"M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8"}],["circle",{"cx":"17","cy":"18","r":"3"}]]
};

export const BookSearch = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M11 22H5.5a1 1 0 0 1 0-5h4.501" />
      <path d="m21 22-1.879-1.878" />
      <path d="M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8" />
      <circle cx="17" cy="18" r="3" />
    </svg>
  );
};

export default BookSearch;
