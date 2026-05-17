import React from 'react';

export const iconData = {
  id: "TableCellsSplit",
  name: "TableCellsSplit",
  category: "T",
  nodes: [["path",{"d":"M12 15V9"}],["path",{"d":"M3 15h18"}],["path",{"d":"M3 9h18"}],["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}]]
};

export const TableCellsSplit = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 15V9" />
      <path d="M3 15h18" />
      <path d="M3 9h18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  );
};

export default TableCellsSplit;
