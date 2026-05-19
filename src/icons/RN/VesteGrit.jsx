import React from 'react';

export const iconData = {
  "id": "VesteGrit",
  "name": "VesteGrit",
  "category": "RN",
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
        "d": "M 8.30 12.00 a 3.70 3.70 0 1 0 7.40 0 a 3.70 3.70 0 1 0 -7.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.57 12.00 a 5.43 5.43 0 1 0 10.86 0 a 5.43 5.43 0 1 0 -10.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.82 12.00 a 7.18 7.18 0 1 0 14.36 0 a 7.18 7.18 0 1 0 -14.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.42 12.00 a 8.58 8.58 0 1 0 17.15 0 a 8.58 8.58 0 1 0 -17.15 0"
      }
    ]
  ]
};

export const VesteGrit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.30 12.00 a 3.70 3.70 0 1 0 7.40 0 a 3.70 3.70 0 1 0 -7.40 0" />
      <path d="M 6.57 12.00 a 5.43 5.43 0 1 0 10.86 0 a 5.43 5.43 0 1 0 -10.86 0" />
      <path d="M 4.82 12.00 a 7.18 7.18 0 1 0 14.36 0 a 7.18 7.18 0 1 0 -14.36 0" />
      <path d="M 3.42 12.00 a 8.58 8.58 0 1 0 17.15 0 a 8.58 8.58 0 1 0 -17.15 0" />
      {children}
    </svg>
  );
});

export default VesteGrit;
