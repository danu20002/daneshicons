import React from 'react';

export const iconData = {
  id: "X",
  name: "X",
  category: "X",
  nodes: [["path",{"d":"M18 6 6 18"}],["path",{"d":"m6 6 12 12"}]]
};

export const X = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
      {children}
    </svg>
  );
});

export default X;
