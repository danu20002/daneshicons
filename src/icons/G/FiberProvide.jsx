import React from 'react';

export const iconData = {
  "id": "FiberProvide",
  "name": "FiberProvide",
  "category": "G",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.66 12.00 a 2.34 2.34 0 1 0 4.68 0 a 2.34 2.34 0 1 0 -4.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 12.00 a 4.94 4.94 0 1 0 9.88 0 a 4.94 4.94 0 1 0 -9.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 12.00 a 7.77 7.77 0 1 0 15.53 0 a 7.77 7.77 0 1 0 -15.53 0"
      }
    ]
  ]
};

export const FiberProvide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.66 12.00 a 2.34 2.34 0 1 0 4.68 0 a 2.34 2.34 0 1 0 -4.68 0" />
      <path d="M 7.06 12.00 a 4.94 4.94 0 1 0 9.88 0 a 4.94 4.94 0 1 0 -9.88 0" />
      <path d="M 4.23 12.00 a 7.77 7.77 0 1 0 15.53 0 a 7.77 7.77 0 1 0 -15.53 0" />
      {children}
    </svg>
  );
});

export default FiberProvide;
