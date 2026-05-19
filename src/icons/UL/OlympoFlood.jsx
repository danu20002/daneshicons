import React from 'react';

export const iconData = {
  "id": "OlympoFlood",
  "name": "OlympoFlood",
  "category": "UL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.83 12.00 a 2.17 2.17 0 1 0 4.33 0 a 2.17 2.17 0 1 0 -4.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.59 12.00 a 4.41 4.41 0 1 0 8.82 0 a 4.41 4.41 0 1 0 -8.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 12.00 a 6.18 6.18 0 1 0 12.36 0 a 6.18 6.18 0 1 0 -12.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 12.00 a 8.15 8.15 0 1 0 16.31 0 a 8.15 8.15 0 1 0 -16.31 0"
      }
    ]
  ]
};

export const OlympoFlood = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.83 12.00 a 2.17 2.17 0 1 0 4.33 0 a 2.17 2.17 0 1 0 -4.33 0" />
      <path d="M 7.59 12.00 a 4.41 4.41 0 1 0 8.82 0 a 4.41 4.41 0 1 0 -8.82 0" />
      <path d="M 5.82 12.00 a 6.18 6.18 0 1 0 12.36 0 a 6.18 6.18 0 1 0 -12.36 0" />
      <path d="M 3.85 12.00 a 8.15 8.15 0 1 0 16.31 0 a 8.15 8.15 0 1 0 -16.31 0" />
      {children}
    </svg>
  );
});

export default OlympoFlood;
