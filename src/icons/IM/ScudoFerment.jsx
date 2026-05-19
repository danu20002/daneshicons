import React from 'react';

export const iconData = {
  "id": "ScudoFerment",
  "name": "ScudoFerment",
  "category": "IM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.79 12.00 a 8.21 8.21 0 1 0 16.42 0 a 8.21 8.21 0 1 0 -16.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.54 12.00 a 6.46 6.46 0 1 1 12.92 0 a 6.46 6.46 0 1 1 -12.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.71 12.00 L 21.71 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.85 18.68 L 16.85 20.41"
      }
    ],
    [
      "path",
      {
        "d": "M 8.15 18.68 L 7.15 20.41"
      }
    ],
    [
      "path",
      {
        "d": "M 4.29 12.00 L 2.29 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.15 5.32 L 7.15 3.59"
      }
    ],
    [
      "path",
      {
        "d": "M 15.85 5.32 L 16.85 3.59"
      }
    ]
  ]
};

export const ScudoFerment = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.79 12.00 a 8.21 8.21 0 1 0 16.42 0 a 8.21 8.21 0 1 0 -16.42 0" />
      <path d="M 5.54 12.00 a 6.46 6.46 0 1 1 12.92 0 a 6.46 6.46 0 1 1 -12.92 0" />
      <path d="M 19.71 12.00 L 21.71 12.00" />
      <path d="M 15.85 18.68 L 16.85 20.41" />
      <path d="M 8.15 18.68 L 7.15 20.41" />
      <path d="M 4.29 12.00 L 2.29 12.00" />
      <path d="M 8.15 5.32 L 7.15 3.59" />
      <path d="M 15.85 5.32 L 16.85 3.59" />
      {children}
    </svg>
  );
});

export default ScudoFerment;
