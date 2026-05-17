import React from 'react';

export const iconData = {
  id: "Kayak",
  name: "Kayak",
  category: "K",
  nodes: [["path",{"d":"M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z"}],["path",{"d":"M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61"}],["path",{"d":"m6.707 6.707 10.586 10.586"}],["path",{"d":"M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z"}]]
};

export const Kayak = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z" />
      <path d="M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61" />
      <path d="m6.707 6.707 10.586 10.586" />
      <path d="M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z" />
    </svg>
  );
};

export default Kayak;
