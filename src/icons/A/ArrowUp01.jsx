import React from 'react';

export const iconData = {
  id: "ArrowUp01",
  name: "ArrowUp01",
  category: "A",
  nodes: [["path",{"d":"m3 8 4-4 4 4"}],["path",{"d":"M7 4v16"}],["rect",{"x":"15","y":"4","width":"4","height":"6","ry":"2"}],["path",{"d":"M17 20v-6h-2"}],["path",{"d":"M15 20h4"}]]
};

export const ArrowUp01 = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <rect x="15" y="4" width="4" height="6" ry="2" />
      <path d="M17 20v-6h-2" />
      <path d="M15 20h4" />
      {children}
    </svg>
  );
});

export default ArrowUp01;
