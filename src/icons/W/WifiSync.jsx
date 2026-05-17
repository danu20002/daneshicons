import React from 'react';

export const iconData = {
  id: "WifiSync",
  name: "WifiSync",
  category: "W",
  nodes: [["path",{"d":"M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5"}],["path",{"d":"M11.965 14.105h4"}],["path",{"d":"M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5"}],["path",{"d":"M2 8.82a15 15 0 0 1 20 0"}],["path",{"d":"M21.965 22.105v-4"}],["path",{"d":"M5 12.86a10 10 0 0 1 3-2.032"}],["path",{"d":"M8.5 16.429h.01"}]]
};

export const WifiSync = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5" />
      <path d="M11.965 14.105h4" />
      <path d="M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M21.965 22.105v-4" />
      <path d="M5 12.86a10 10 0 0 1 3-2.032" />
      <path d="M8.5 16.429h.01" />
    </svg>
  );
};

export default WifiSync;
