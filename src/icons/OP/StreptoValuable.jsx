import React from 'react';

export const iconData = {
  "id": "StreptoValuable",
  "name": "StreptoValuable",
  "category": "OP",
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
        "d": "M 7.74 12.00 a 4.26 4.26 0 1 0 8.53 0 a 4.26 4.26 0 1 0 -8.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 12.00 a 6.30 6.30 0 1 0 12.60 0 a 6.30 6.30 0 1 0 -12.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.93 12.00 a 8.07 8.07 0 1 0 16.14 0 a 8.07 8.07 0 1 0 -16.14 0"
      }
    ]
  ]
};

export const StreptoValuable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.74 12.00 a 4.26 4.26 0 1 0 8.53 0 a 4.26 4.26 0 1 0 -8.53 0" />
      <path d="M 5.70 12.00 a 6.30 6.30 0 1 0 12.60 0 a 6.30 6.30 0 1 0 -12.60 0" />
      <path d="M 3.93 12.00 a 8.07 8.07 0 1 0 16.14 0 a 8.07 8.07 0 1 0 -16.14 0" />
      {children}
    </svg>
  );
});

export default StreptoValuable;
