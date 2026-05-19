import React from 'react';

export const iconData = {
  "id": "UnivocoTrace",
  "name": "UnivocoTrace",
  "category": "KP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.89 12.00 a 8.11 8.11 0 1 0 16.22 0 a 8.11 8.11 0 1 0 -16.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 7.95 a 7.02 2.1064622629138205 0 1 0 14.04 0 a 7.02 2.1064622629138205 0 1 0 -14.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.89 12.00 a 8.11 2.432333109062165 0 1 0 16.22 0 a 8.11 2.432333109062165 0 1 0 -16.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 16.05 a 7.02 2.1064622629138205 0 1 0 14.04 0 a 7.02 2.1064622629138205 0 1 0 -14.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.05 4.98 A 2 2 0 0 0 16.05 19.02"
      }
    ],
    [
      "path",
      {
        "d": "M 16.05 4.98 A 2 2 0 0 1 16.05 19.02"
      }
    ],
    [
      "path",
      {
        "d": "M 7.95 4.98 A 2 2 0 0 0 7.95 19.02"
      }
    ],
    [
      "path",
      {
        "d": "M 7.95 4.98 A 2 2 0 0 1 7.95 19.02"
      }
    ]
  ]
};

export const UnivocoTrace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.89 12.00 a 8.11 8.11 0 1 0 16.22 0 a 8.11 8.11 0 1 0 -16.22 0" />
      <path d="M 4.98 7.95 a 7.02 2.1064622629138205 0 1 0 14.04 0 a 7.02 2.1064622629138205 0 1 0 -14.04 0" />
      <path d="M 3.89 12.00 a 8.11 2.432333109062165 0 1 0 16.22 0 a 8.11 2.432333109062165 0 1 0 -16.22 0" />
      <path d="M 4.98 16.05 a 7.02 2.1064622629138205 0 1 0 14.04 0 a 7.02 2.1064622629138205 0 1 0 -14.04 0" />
      <path d="M 16.05 4.98 A 2 2 0 0 0 16.05 19.02" />
      <path d="M 16.05 4.98 A 2 2 0 0 1 16.05 19.02" />
      <path d="M 7.95 4.98 A 2 2 0 0 0 7.95 19.02" />
      <path d="M 7.95 4.98 A 2 2 0 0 1 7.95 19.02" />
      {children}
    </svg>
  );
});

export default UnivocoTrace;
