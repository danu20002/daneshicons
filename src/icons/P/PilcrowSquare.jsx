import React from 'react';

export const iconData = {
  id: "PilcrowSquare",
  name: "PilcrowSquare",
  category: "P",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"}],["path",{"d":"M12 7v10"}],["path",{"d":"M16 7v10"}]]
};

export const PilcrowSquare = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17" />
      <path d="M12 7v10" />
      <path d="M16 7v10" />
    </svg>
  );
};

export default PilcrowSquare;
