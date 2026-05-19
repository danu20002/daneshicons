import React from 'react';

export const iconData = {
  "id": "PrismoChasm",
  "name": "PrismoChasm",
  "category": "QU",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.95 12.00 a 2.05 2.05 0 1 0 4.10 0 a 2.05 2.05 0 1 0 -4.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 12.00 a 6.43 6.43 0 1 0 12.86 0 a 6.43 6.43 0 1 0 -12.86 0"
      }
    ]
  ]
};

export const PrismoChasm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.95 12.00 a 2.05 2.05 0 1 0 4.10 0 a 2.05 2.05 0 1 0 -4.10 0" />
      <path d="M 5.57 12.00 a 6.43 6.43 0 1 0 12.86 0 a 6.43 6.43 0 1 0 -12.86 0" />
      {children}
    </svg>
  );
});

export default PrismoChasm;
