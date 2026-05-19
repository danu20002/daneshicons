import React from 'react';

export const iconData = {
  "id": "ViminePuzzle",
  "name": "ViminePuzzle",
  "category": "SM",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.05 3.73 A 3.34 4.21 52 0 0 3.34 19.35"
      }
    ],
    [
      "path",
      {
        "d": "M 16.73 8.32 A 2.87 3.69 89 0 1 10.49 3.50"
      }
    ],
    [
      "path",
      {
        "d": "M 9.13 20.25 L 2.98 9.22 L 9.06 15.88 L 2.78 16.08 L 12.92 2.24 L 14.29 19.32"
      }
    ],
    [
      "path",
      {
        "d": "M 15.20 5.40 L 8.56 19.75"
      }
    ]
  ]
};

export const ViminePuzzle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.05 3.73 A 3.34 4.21 52 0 0 3.34 19.35" />
      <path d="M 16.73 8.32 A 2.87 3.69 89 0 1 10.49 3.50" />
      <path d="M 9.13 20.25 L 2.98 9.22 L 9.06 15.88 L 2.78 16.08 L 12.92 2.24 L 14.29 19.32" />
      <path d="M 15.20 5.40 L 8.56 19.75" />
      {children}
    </svg>
  );
});

export default ViminePuzzle;
