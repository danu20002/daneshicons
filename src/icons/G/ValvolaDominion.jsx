import React from 'react';

export const iconData = {
  "id": "ValvolaDominion",
  "name": "ValvolaDominion",
  "category": "G",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.86 12.00 a 2.14 2.14 0 1 0 4.28 0 a 2.14 2.14 0 1 0 -4.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 12.00 a 3.86 3.86 0 1 0 7.71 0 a 3.86 3.86 0 1 0 -7.71 0",
        "stroke-dasharray": "4 3"
      }
    ],
    [
      "path",
      {
        "d": "M 6.72 12.00 a 5.28 5.28 0 1 0 10.56 0 a 5.28 5.28 0 1 0 -10.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 12.00 a 6.97 6.97 0 1 0 13.94 0 a 6.97 6.97 0 1 0 -13.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.59 12.00 a 8.41 8.41 0 1 0 16.82 0 a 8.41 8.41 0 1 0 -16.82 0"
      }
    ]
  ]
};

export const ValvolaDominion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.86 12.00 a 2.14 2.14 0 1 0 4.28 0 a 2.14 2.14 0 1 0 -4.28 0" />
      <path d="M 8.14 12.00 a 3.86 3.86 0 1 0 7.71 0 a 3.86 3.86 0 1 0 -7.71 0" stroke-dasharray="4 3" />
      <path d="M 6.72 12.00 a 5.28 5.28 0 1 0 10.56 0 a 5.28 5.28 0 1 0 -10.56 0" />
      <path d="M 5.03 12.00 a 6.97 6.97 0 1 0 13.94 0 a 6.97 6.97 0 1 0 -13.94 0" />
      <path d="M 3.59 12.00 a 8.41 8.41 0 1 0 16.82 0 a 8.41 8.41 0 1 0 -16.82 0" />
      {children}
    </svg>
  );
});

export default ValvolaDominion;
