import React from 'react';

export const iconData = {
  "id": "StibioPile",
  "name": "StibioPile",
  "category": "UL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.66 12.00 a 2.34 2.34 0 1 0 4.69 0 a 2.34 2.34 0 1 0 -4.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.18 12.00 a 3.82 3.82 0 1 0 7.64 0 a 3.82 3.82 0 1 0 -7.64 0",
        "stroke-dasharray": "6 1"
      }
    ],
    [
      "path",
      {
        "d": "M 6.57 12.00 a 5.43 5.43 0 1 0 10.86 0 a 5.43 5.43 0 1 0 -10.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.00 12.00 a 7.00 7.00 0 1 0 14.00 0 a 7.00 7.00 0 1 0 -14.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 12.00 a 8.77 8.77 0 1 0 17.54 0 a 8.77 8.77 0 1 0 -17.54 0"
      }
    ]
  ]
};

export const StibioPile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.66 12.00 a 2.34 2.34 0 1 0 4.69 0 a 2.34 2.34 0 1 0 -4.69 0" />
      <path d="M 8.18 12.00 a 3.82 3.82 0 1 0 7.64 0 a 3.82 3.82 0 1 0 -7.64 0" stroke-dasharray="6 1" />
      <path d="M 6.57 12.00 a 5.43 5.43 0 1 0 10.86 0 a 5.43 5.43 0 1 0 -10.86 0" />
      <path d="M 5.00 12.00 a 7.00 7.00 0 1 0 14.00 0 a 7.00 7.00 0 1 0 -14.00 0" />
      <path d="M 3.23 12.00 a 8.77 8.77 0 1 0 17.54 0 a 8.77 8.77 0 1 0 -17.54 0" />
      {children}
    </svg>
  );
});

export default StibioPile;
