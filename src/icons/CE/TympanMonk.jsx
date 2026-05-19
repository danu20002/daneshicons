import React from 'react';

export const iconData = {
  "id": "TympanMonk",
  "name": "TympanMonk",
  "category": "CE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.95 12.00 a 2.05 2.05 0 1 0 4.09 0 a 2.05 2.05 0 1 0 -4.09 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 8.07 12.00 a 3.93 3.93 0 1 0 7.87 0 a 3.93 3.93 0 1 0 -7.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.68 12.00 a 5.32 5.32 0 1 0 10.64 0 a 5.32 5.32 0 1 0 -10.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 12.00 a 7.29 7.29 0 1 0 14.57 0 a 7.29 7.29 0 1 0 -14.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 12.00 a 8.45 8.45 0 1 0 16.90 0 a 8.45 8.45 0 1 0 -16.90 0"
      }
    ]
  ]
};

export const TympanMonk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.95 12.00 a 2.05 2.05 0 1 0 4.09 0 a 2.05 2.05 0 1 0 -4.09 0" stroke-dasharray="4 2" />
      <path d="M 8.07 12.00 a 3.93 3.93 0 1 0 7.87 0 a 3.93 3.93 0 1 0 -7.87 0" />
      <path d="M 6.68 12.00 a 5.32 5.32 0 1 0 10.64 0 a 5.32 5.32 0 1 0 -10.64 0" />
      <path d="M 4.71 12.00 a 7.29 7.29 0 1 0 14.57 0 a 7.29 7.29 0 1 0 -14.57 0" />
      <path d="M 3.55 12.00 a 8.45 8.45 0 1 0 16.90 0 a 8.45 8.45 0 1 0 -16.90 0" />
      {children}
    </svg>
  );
});

export default TympanMonk;
