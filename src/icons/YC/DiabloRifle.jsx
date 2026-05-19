import React from 'react';

export const iconData = {
  "id": "DiabloRifle",
  "name": "DiabloRifle",
  "category": "YC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.82 12.00 a 2.18 2.18 0 1 0 4.37 0 a 2.18 2.18 0 1 0 -4.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 12.00 a 4.26 4.26 0 1 0 8.51 0 a 4.26 4.26 0 1 0 -8.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.65 12.00 a 6.35 6.35 0 1 0 12.70 0 a 6.35 6.35 0 1 0 -12.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.91 12.00 a 8.09 8.09 0 1 0 16.18 0 a 8.09 8.09 0 1 0 -16.18 0"
      }
    ]
  ]
};

export const DiabloRifle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.82 12.00 a 2.18 2.18 0 1 0 4.37 0 a 2.18 2.18 0 1 0 -4.37 0" />
      <path d="M 7.74 12.00 a 4.26 4.26 0 1 0 8.51 0 a 4.26 4.26 0 1 0 -8.51 0" />
      <path d="M 5.65 12.00 a 6.35 6.35 0 1 0 12.70 0 a 6.35 6.35 0 1 0 -12.70 0" />
      <path d="M 3.91 12.00 a 8.09 8.09 0 1 0 16.18 0 a 8.09 8.09 0 1 0 -16.18 0" />
      {children}
    </svg>
  );
});

export default DiabloRifle;
