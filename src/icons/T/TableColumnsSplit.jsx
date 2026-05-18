import React from 'react';

export const iconData = {
  id: "TableColumnsSplit",
  name: "TableColumnsSplit",
  category: "T",
  nodes: [["path",{"d":"M14 14v2"}],["path",{"d":"M14 20v2"}],["path",{"d":"M14 2v2"}],["path",{"d":"M14 8v2"}],["path",{"d":"M2 15h8"}],["path",{"d":"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"}],["path",{"d":"M2 9h8"}],["path",{"d":"M22 15h-4"}],["path",{"d":"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"}],["path",{"d":"M22 9h-4"}],["path",{"d":"M5 3v18"}]]
};

export const TableColumnsSplit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M14 14v2" />
      <path d="M14 20v2" />
      <path d="M14 2v2" />
      <path d="M14 8v2" />
      <path d="M2 15h8" />
      <path d="M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" />
      <path d="M2 9h8" />
      <path d="M22 15h-4" />
      <path d="M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
      <path d="M22 9h-4" />
      <path d="M5 3v18" />
      {children}
    </svg>
  );
});

export default TableColumnsSplit;
