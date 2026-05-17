import React from 'react';

export const iconData = {
  id: "KanbanSquare",
  name: "KanbanSquare",
  category: "K",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M8 7v7"}],["path",{"d":"M12 7v4"}],["path",{"d":"M16 7v9"}]]
};

export const KanbanSquare = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M8 7v7" />
      <path d="M12 7v4" />
      <path d="M16 7v9" />
    </svg>
  );
};

export default KanbanSquare;
