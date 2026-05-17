import React from 'react';

export const iconData = {
  id: "BookKey",
  name: "BookKey",
  category: "B",
  nodes: [["path",{"d":"M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15"}],["path",{"d":"M17 2v6"}],["path",{"d":"M17 4h2"}],["path",{"d":"M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{"cx":"17","cy":"10","r":"2"}]]
};

export const BookKey = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15" />
      <path d="M17 2v6" />
      <path d="M17 4h2" />
      <path d="M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <circle cx="17" cy="10" r="2" />
    </svg>
  );
};

export default BookKey;
