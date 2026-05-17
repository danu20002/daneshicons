import React from 'react';

export const iconData = {
  id: "Mails",
  name: "Mails",
  category: "M",
  nodes: [["path",{"d":"M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732"}],["path",{"d":"m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5"}],["rect",{"x":"7","y":"3","width":"15","height":"12","rx":"2"}]]
};

export const Mails = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732" />
      <path d="m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5" />
      <rect x="7" y="3" width="15" height="12" rx="2" />
    </svg>
  );
};

export default Mails;
