import React from 'react';

export const iconData = {
  "id": "FiberRare",
  "name": "FiberRare",
  "category": "FQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.74 10.92 L 8.06 20.98 L 6.20 4.10 Z"
      }
    ]
  ]
};

export const FiberRare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.74 10.92 L 8.06 20.98 L 6.20 4.10 Z" />
      {children}
    </svg>
  );
});

export default FiberRare;
