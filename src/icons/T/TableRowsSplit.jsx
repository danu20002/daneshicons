import React from 'react';

export const iconData = {
  id: "TableRowsSplit",
  name: "TableRowsSplit",
  category: "T",
  nodes: [["path",{"d":"M14 10h2"}],["path",{"d":"M15 22v-8"}],["path",{"d":"M15 2v4"}],["path",{"d":"M2 10h2"}],["path",{"d":"M20 10h2"}],["path",{"d":"M3 19h18"}],["path",{"d":"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6"}],["path",{"d":"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2"}],["path",{"d":"M8 10h2"}],["path",{"d":"M9 22v-8"}],["path",{"d":"M9 2v4"}]]
};

export const TableRowsSplit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M14 10h2" />
      <path d="M15 22v-8" />
      <path d="M15 2v4" />
      <path d="M2 10h2" />
      <path d="M20 10h2" />
      <path d="M3 19h18" />
      <path d="M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" />
      <path d="M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" />
      <path d="M8 10h2" />
      <path d="M9 22v-8" />
      <path d="M9 2v4" />
      {children}
    </svg>
  );
});

export default TableRowsSplit;
