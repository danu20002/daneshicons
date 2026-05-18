import React from 'react';

export const iconData = {
  id: "ListStart",
  name: "ListStart",
  category: "L",
  nodes: [["path",{"d":"M3 5h6"}],["path",{"d":"M3 12h13"}],["path",{"d":"M3 19h13"}],["path",{"d":"m16 8-3-3 3-3"}],["path",{"d":"M21 19V7a2 2 0 0 0-2-2h-6"}]]
};

export const ListStart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M3 5h6" />
      <path d="M3 12h13" />
      <path d="M3 19h13" />
      <path d="m16 8-3-3 3-3" />
      <path d="M21 19V7a2 2 0 0 0-2-2h-6" />
      {children}
    </svg>
  );
});

export default ListStart;
