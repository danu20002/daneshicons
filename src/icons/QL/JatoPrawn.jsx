import React from 'react';

export const iconData = {
  "id": "JatoPrawn",
  "name": "JatoPrawn",
  "category": "QL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.72 12.00 a 8.28 8.28 0 1 0 16.56 0 a 8.28 8.28 0 1 0 -16.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.72 12.00 a 8.28 2.48402657546103 0 1 0 16.56 0 a 8.28 2.48402657546103 0 1 0 -16.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.85 6.15 A 2 2 0 0 0 17.85 17.85"
      }
    ],
    [
      "path",
      {
        "d": "M 17.85 6.15 A 2 2 0 0 1 17.85 17.85"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.72 A 2 2 0 0 0 12.00 20.28"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.72 A 2 2 0 0 1 12.00 20.28"
      }
    ],
    [
      "path",
      {
        "d": "M 6.15 6.15 A 2 2 0 0 0 6.15 17.85"
      }
    ],
    [
      "path",
      {
        "d": "M 6.15 6.15 A 2 2 0 0 1 6.15 17.85"
      }
    ]
  ]
};

export const JatoPrawn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.72 12.00 a 8.28 8.28 0 1 0 16.56 0 a 8.28 8.28 0 1 0 -16.56 0" />
      <path d="M 3.72 12.00 a 8.28 2.48402657546103 0 1 0 16.56 0 a 8.28 2.48402657546103 0 1 0 -16.56 0" />
      <path d="M 17.85 6.15 A 2 2 0 0 0 17.85 17.85" />
      <path d="M 17.85 6.15 A 2 2 0 0 1 17.85 17.85" />
      <path d="M 12.00 3.72 A 2 2 0 0 0 12.00 20.28" />
      <path d="M 12.00 3.72 A 2 2 0 0 1 12.00 20.28" />
      <path d="M 6.15 6.15 A 2 2 0 0 0 6.15 17.85" />
      <path d="M 6.15 6.15 A 2 2 0 0 1 6.15 17.85" />
      {children}
    </svg>
  );
});

export default JatoPrawn;
