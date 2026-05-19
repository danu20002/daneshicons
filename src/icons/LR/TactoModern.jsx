import React from 'react';

export const iconData = {
  "id": "TactoModern",
  "name": "TactoModern",
  "category": "LR",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.77 12.00 a 2.23 2.23 0 1 0 4.46 0 a 2.23 2.23 0 1 0 -4.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.08 12.00 a 3.92 3.92 0 1 0 7.84 0 a 3.92 3.92 0 1 0 -7.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.54 12.00 a 5.46 5.46 0 1 0 10.92 0 a 5.46 5.46 0 1 0 -10.92 0",
        "stroke-dasharray": "3 1"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 12.00 a 7.26 7.26 0 1 0 14.52 0 a 7.26 7.26 0 1 0 -14.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.28 12.00 a 8.72 8.72 0 1 0 17.44 0 a 8.72 8.72 0 1 0 -17.44 0"
      }
    ]
  ]
};

export const TactoModern = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.77 12.00 a 2.23 2.23 0 1 0 4.46 0 a 2.23 2.23 0 1 0 -4.46 0" />
      <path d="M 8.08 12.00 a 3.92 3.92 0 1 0 7.84 0 a 3.92 3.92 0 1 0 -7.84 0" />
      <path d="M 6.54 12.00 a 5.46 5.46 0 1 0 10.92 0 a 5.46 5.46 0 1 0 -10.92 0" stroke-dasharray="3 1" />
      <path d="M 4.74 12.00 a 7.26 7.26 0 1 0 14.52 0 a 7.26 7.26 0 1 0 -14.52 0" />
      <path d="M 3.28 12.00 a 8.72 8.72 0 1 0 17.44 0 a 8.72 8.72 0 1 0 -17.44 0" />
      {children}
    </svg>
  );
});

export default TactoModern;
