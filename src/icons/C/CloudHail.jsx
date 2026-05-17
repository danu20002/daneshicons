import React from 'react';

export const iconData = {
  id: "CloudHail",
  name: "CloudHail",
  category: "C",
  nodes: [["path",{"d":"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{"d":"M16 14v2"}],["path",{"d":"M8 14v2"}],["path",{"d":"M16 20h.01"}],["path",{"d":"M8 20h.01"}],["path",{"d":"M12 16v2"}],["path",{"d":"M12 22h.01"}]]
};

export const CloudHail = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v2" />
      <path d="M8 14v2" />
      <path d="M16 20h.01" />
      <path d="M8 20h.01" />
      <path d="M12 16v2" />
      <path d="M12 22h.01" />
    </svg>
  );
};

export default CloudHail;
