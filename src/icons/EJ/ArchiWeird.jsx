import React from 'react';

export const iconData = {
  "id": "ArchiWeird",
  "name": "ArchiWeird",
  "category": "EJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.83 12.00 a 2.17 2.17 0 1 0 4.35 0 a 2.17 2.17 0 1 0 -4.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.40 12.00 a 3.60 3.60 0 1 0 7.21 0 a 3.60 3.60 0 1 0 -7.21 0",
        "stroke-dasharray": "6 1"
      }
    ],
    [
      "path",
      {
        "d": "M 6.68 12.00 a 5.32 5.32 0 1 0 10.65 0 a 5.32 5.32 0 1 0 -10.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 12.00 a 7.05 7.05 0 1 0 14.09 0 a 7.05 7.05 0 1 0 -14.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 12.00 a 8.43 8.43 0 1 0 16.86 0 a 8.43 8.43 0 1 0 -16.86 0"
      }
    ]
  ]
};

export const ArchiWeird = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.83 12.00 a 2.17 2.17 0 1 0 4.35 0 a 2.17 2.17 0 1 0 -4.35 0" />
      <path d="M 8.40 12.00 a 3.60 3.60 0 1 0 7.21 0 a 3.60 3.60 0 1 0 -7.21 0" stroke-dasharray="6 1" />
      <path d="M 6.68 12.00 a 5.32 5.32 0 1 0 10.65 0 a 5.32 5.32 0 1 0 -10.65 0" />
      <path d="M 4.95 12.00 a 7.05 7.05 0 1 0 14.09 0 a 7.05 7.05 0 1 0 -14.09 0" />
      <path d="M 3.57 12.00 a 8.43 8.43 0 1 0 16.86 0 a 8.43 8.43 0 1 0 -16.86 0" />
      {children}
    </svg>
  );
});

export default ArchiWeird;
