import React from 'react';

export const iconData = {
  id: "Podcast",
  name: "Podcast",
  category: "P",
  nodes: [["path",{"d":"M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z","fill":"currentColor"}],["path",{"d":"M16.85 18.58a9 9 0 1 0-9.7 0"}],["path",{"d":"M8 14a5 5 0 1 1 8 0"}],["circle",{"cx":"12","cy":"11","r":"1","fill":"currentColor"}]]
};

export const Podcast = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z" fill="currentColor" />
      <path d="M16.85 18.58a9 9 0 1 0-9.7 0" />
      <path d="M8 14a5 5 0 1 1 8 0" />
      <circle cx="12" cy="11" r="1" fill="currentColor" />
    </svg>
  );
};

export default Podcast;
