import React from 'react';

export const iconData = {
  "id": "VersaleNut",
  "name": "VersaleNut",
  "category": "KY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.59 12.00 a 2.41 2.41 0 1 0 4.82 0 a 2.41 2.41 0 1 0 -4.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 12.00 a 3.86 3.86 0 1 0 7.73 0 a 3.86 3.86 0 1 0 -7.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.51 12.00 a 5.49 5.49 0 1 0 10.98 0 a 5.49 5.49 0 1 0 -10.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.05 12.00 a 6.95 6.95 0 1 0 13.90 0 a 6.95 6.95 0 1 0 -13.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.35 12.00 a 8.65 8.65 0 1 0 17.31 0 a 8.65 8.65 0 1 0 -17.31 0"
      }
    ]
  ]
};

export const VersaleNut = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.59 12.00 a 2.41 2.41 0 1 0 4.82 0 a 2.41 2.41 0 1 0 -4.82 0" />
      <path d="M 8.14 12.00 a 3.86 3.86 0 1 0 7.73 0 a 3.86 3.86 0 1 0 -7.73 0" />
      <path d="M 6.51 12.00 a 5.49 5.49 0 1 0 10.98 0 a 5.49 5.49 0 1 0 -10.98 0" />
      <path d="M 5.05 12.00 a 6.95 6.95 0 1 0 13.90 0 a 6.95 6.95 0 1 0 -13.90 0" />
      <path d="M 3.35 12.00 a 8.65 8.65 0 1 0 17.31 0 a 8.65 8.65 0 1 0 -17.31 0" />
      {children}
    </svg>
  );
});

export default VersaleNut;
