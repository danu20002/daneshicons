import React from 'react';

export const iconData = {
  id: "BookmarkOff",
  name: "BookmarkOff",
  category: "B",
  nodes: [["path",{"d":"M19 19v1a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M8.656 3H17a2 2 0 0 1 2 2v8.344"}]]
};

export const BookmarkOff = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M19 19v1a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5" />
      <path d="m2 2 20 20" />
      <path d="M8.656 3H17a2 2 0 0 1 2 2v8.344" />
    </svg>
  );
};

export default BookmarkOff;
