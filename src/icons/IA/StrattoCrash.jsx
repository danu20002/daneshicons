import React from 'react';

export const iconData = {
  "id": "StrattoCrash",
  "name": "StrattoCrash",
  "category": "IA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.76 12.00 a 2.24 2.24 0 1 0 4.49 0 a 2.24 2.24 0 1 0 -4.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.90 12.00 a 4.10 4.10 0 1 0 8.20 0 a 4.10 4.10 0 1 0 -8.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.66 12.00 a 5.34 5.34 0 1 0 10.68 0 a 5.34 5.34 0 1 0 -10.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 12.00 a 6.99 6.99 0 1 0 13.98 0 a 6.99 6.99 0 1 0 -13.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.25 12.00 a 8.75 8.75 0 1 0 17.49 0 a 8.75 8.75 0 1 0 -17.49 0"
      }
    ]
  ]
};

export const StrattoCrash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.76 12.00 a 2.24 2.24 0 1 0 4.49 0 a 2.24 2.24 0 1 0 -4.49 0" />
      <path d="M 7.90 12.00 a 4.10 4.10 0 1 0 8.20 0 a 4.10 4.10 0 1 0 -8.20 0" />
      <path d="M 6.66 12.00 a 5.34 5.34 0 1 0 10.68 0 a 5.34 5.34 0 1 0 -10.68 0" />
      <path d="M 5.01 12.00 a 6.99 6.99 0 1 0 13.98 0 a 6.99 6.99 0 1 0 -13.98 0" />
      <path d="M 3.25 12.00 a 8.75 8.75 0 1 0 17.49 0 a 8.75 8.75 0 1 0 -17.49 0" />
      {children}
    </svg>
  );
});

export default StrattoCrash;
