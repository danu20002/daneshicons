import React from 'react';

export const iconData = {
  "id": "MorphoDeduce",
  "name": "MorphoDeduce",
  "category": "KR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.05 12.00 a 8.95 8.95 0 1 0 17.89 0 a 8.95 8.95 0 1 0 -17.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.93 12.00 a 6.07 6.07 0 1 1 12.14 0 a 6.07 6.07 0 1 1 -12.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.45 12.00 L 22.45 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.47 17.43 L 20.00 18.72"
      }
    ],
    [
      "path",
      {
        "d": "M 13.47 20.32 L 13.81 22.29"
      }
    ],
    [
      "path",
      {
        "d": "M 7.78 19.32 L 6.78 21.05"
      }
    ],
    [
      "path",
      {
        "d": "M 4.06 14.89 L 2.18 15.57"
      }
    ],
    [
      "path",
      {
        "d": "M 4.06 9.11 L 2.18 8.43"
      }
    ],
    [
      "path",
      {
        "d": "M 7.78 4.68 L 6.78 2.95"
      }
    ],
    [
      "path",
      {
        "d": "M 13.47 3.68 L 13.81 1.71"
      }
    ],
    [
      "path",
      {
        "d": "M 18.47 6.57 L 20.00 5.28"
      }
    ]
  ]
};

export const MorphoDeduce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.05 12.00 a 8.95 8.95 0 1 0 17.89 0 a 8.95 8.95 0 1 0 -17.89 0" />
      <path d="M 5.93 12.00 a 6.07 6.07 0 1 1 12.14 0 a 6.07 6.07 0 1 1 -12.14 0" />
      <path d="M 20.45 12.00 L 22.45 12.00" />
      <path d="M 18.47 17.43 L 20.00 18.72" />
      <path d="M 13.47 20.32 L 13.81 22.29" />
      <path d="M 7.78 19.32 L 6.78 21.05" />
      <path d="M 4.06 14.89 L 2.18 15.57" />
      <path d="M 4.06 9.11 L 2.18 8.43" />
      <path d="M 7.78 4.68 L 6.78 2.95" />
      <path d="M 13.47 3.68 L 13.81 1.71" />
      <path d="M 18.47 6.57 L 20.00 5.28" />
      {children}
    </svg>
  );
});

export default MorphoDeduce;
