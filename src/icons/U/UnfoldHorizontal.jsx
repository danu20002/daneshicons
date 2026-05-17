import React from 'react';

export const iconData = {
  id: "UnfoldHorizontal",
  name: "UnfoldHorizontal",
  category: "U",
  nodes: [["path",{"d":"M16 12h6"}],["path",{"d":"M8 12H2"}],["path",{"d":"M12 2v2"}],["path",{"d":"M12 8v2"}],["path",{"d":"M12 14v2"}],["path",{"d":"M12 20v2"}],["path",{"d":"m19 15 3-3-3-3"}],["path",{"d":"m5 9-3 3 3 3"}]]
};

export const UnfoldHorizontal = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M16 12h6" />
      <path d="M8 12H2" />
      <path d="M12 2v2" />
      <path d="M12 8v2" />
      <path d="M12 14v2" />
      <path d="M12 20v2" />
      <path d="m19 15 3-3-3-3" />
      <path d="m5 9-3 3 3 3" />
    </svg>
  );
};

export default UnfoldHorizontal;
