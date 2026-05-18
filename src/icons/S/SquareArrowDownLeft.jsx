import React from 'react';

export const iconData = {
  id: "SquareArrowDownLeft",
  name: "SquareArrowDownLeft",
  category: "S",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"m16 8-8 8"}],["path",{"d":"M16 16H8V8"}]]
};

export const SquareArrowDownLeft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m16 8-8 8" />
      <path d="M16 16H8V8" />
      {children}
    </svg>
  );
});

export default SquareArrowDownLeft;
