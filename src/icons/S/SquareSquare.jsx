import React from 'react';

export const iconData = {
  id: "SquareSquare",
  name: "SquareSquare",
  category: "S",
  nodes: [["rect",{"x":"3","y":"3","width":"18","height":"18","rx":"2"}],["rect",{"x":"8","y":"8","width":"8","height":"8","rx":"1"}]]
};

export const SquareSquare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <rect x="8" y="8" width="8" height="8" rx="1" />
      {children}
    </svg>
  );
});

export default SquareSquare;
