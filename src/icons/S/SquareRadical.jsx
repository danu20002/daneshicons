import React from 'react';

export const iconData = {
  id: "SquareRadical",
  name: "SquareRadical",
  category: "S",
  nodes: [["path",{"d":"M7 12h2l2 5 2-10h4"}],["rect",{"x":"3","y":"3","width":"18","height":"18","rx":"2"}]]
};

export const SquareRadical = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M7 12h2l2 5 2-10h4" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      {children}
    </svg>
  );
});

export default SquareRadical;
