import React from 'react';

export const iconData = {
  "id": "FormoOnline",
  "name": "FormoOnline",
  "category": "SZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.64 12.00 a 2.36 2.36 0 1 0 4.72 0 a 2.36 2.36 0 1 0 -4.72 0",
        "stroke-dasharray": "4 1"
      }
    ],
    [
      "path",
      {
        "d": "M 8.05 12.00 a 3.95 3.95 0 1 0 7.89 0 a 3.95 3.95 0 1 0 -7.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.42 12.00 a 5.58 5.58 0 1 0 11.16 0 a 5.58 5.58 0 1 0 -11.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.08 12.00 a 6.92 6.92 0 1 0 13.85 0 a 6.92 6.92 0 1 0 -13.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.25 12.00 a 8.75 8.75 0 1 0 17.50 0 a 8.75 8.75 0 1 0 -17.50 0"
      }
    ]
  ]
};

export const FormoOnline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.64 12.00 a 2.36 2.36 0 1 0 4.72 0 a 2.36 2.36 0 1 0 -4.72 0" stroke-dasharray="4 1" />
      <path d="M 8.05 12.00 a 3.95 3.95 0 1 0 7.89 0 a 3.95 3.95 0 1 0 -7.89 0" />
      <path d="M 6.42 12.00 a 5.58 5.58 0 1 0 11.16 0 a 5.58 5.58 0 1 0 -11.16 0" />
      <path d="M 5.08 12.00 a 6.92 6.92 0 1 0 13.85 0 a 6.92 6.92 0 1 0 -13.85 0" />
      <path d="M 3.25 12.00 a 8.75 8.75 0 1 0 17.50 0 a 8.75 8.75 0 1 0 -17.50 0" />
      {children}
    </svg>
  );
});

export default FormoOnline;
