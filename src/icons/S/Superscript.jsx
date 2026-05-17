import React from 'react';

export const iconData = {
  id: "Superscript",
  name: "Superscript",
  category: "S",
  nodes: [["path",{"d":"m4 19 8-8"}],["path",{"d":"m12 19-8-8"}],["path",{"d":"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"}]]
};

export const Superscript = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m4 19 8-8" />
      <path d="m12 19-8-8" />
      <path d="M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06" />
    </svg>
  );
};

export default Superscript;
