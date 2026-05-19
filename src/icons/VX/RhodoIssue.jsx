import React from 'react';

export const iconData = {
  "id": "RhodoIssue",
  "name": "RhodoIssue",
  "category": "VX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.86 12.00 a 2.14 2.14 0 1 0 4.29 0 a 2.14 2.14 0 1 0 -4.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.78 12.00 a 4.22 4.22 0 1 0 8.44 0 a 4.22 4.22 0 1 0 -8.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.86 12.00 a 6.14 6.14 0 1 0 12.28 0 a 6.14 6.14 0 1 0 -12.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.65 12.00 a 8.35 8.35 0 1 0 16.69 0 a 8.35 8.35 0 1 0 -16.69 0",
        "stroke-dasharray": "2 3"
      }
    ]
  ]
};

export const RhodoIssue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.86 12.00 a 2.14 2.14 0 1 0 4.29 0 a 2.14 2.14 0 1 0 -4.29 0" />
      <path d="M 7.78 12.00 a 4.22 4.22 0 1 0 8.44 0 a 4.22 4.22 0 1 0 -8.44 0" />
      <path d="M 5.86 12.00 a 6.14 6.14 0 1 0 12.28 0 a 6.14 6.14 0 1 0 -12.28 0" />
      <path d="M 3.65 12.00 a 8.35 8.35 0 1 0 16.69 0 a 8.35 8.35 0 1 0 -16.69 0" stroke-dasharray="2 3" />
      {children}
    </svg>
  );
});

export default RhodoIssue;
