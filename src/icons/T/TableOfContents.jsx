import React from 'react';

export const iconData = {
  id: "TableOfContents",
  name: "TableOfContents",
  category: "T",
  nodes: [["path",{"d":"M16 5H3"}],["path",{"d":"M16 12H3"}],["path",{"d":"M16 19H3"}],["path",{"d":"M21 5h.01"}],["path",{"d":"M21 12h.01"}],["path",{"d":"M21 19h.01"}]]
};

export const TableOfContents = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M16 5H3" />
      <path d="M16 12H3" />
      <path d="M16 19H3" />
      <path d="M21 5h.01" />
      <path d="M21 12h.01" />
      <path d="M21 19h.01" />
      {children}
    </svg>
  );
});

export default TableOfContents;
