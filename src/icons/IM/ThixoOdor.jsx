import React from 'react';

export const iconData = {
  "id": "ThixoOdor",
  "name": "ThixoOdor",
  "category": "IM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.96 12.00 a 7.04 7.04 0 1 0 14.08 0 a 7.04 7.04 0 1 0 -14.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.11 12.00 a 4.89 4.89 0 1 1 9.78 0 a 4.89 4.89 0 1 1 -9.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.54 12.00 L 20.54 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.01 16.20 L 18.54 17.49"
      }
    ],
    [
      "path",
      {
        "d": "M 13.14 18.44 L 13.48 20.41"
      }
    ],
    [
      "path",
      {
        "d": "M 8.73 17.66 L 7.73 19.40"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 14.24 L 3.97 14.92"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 9.76 L 3.97 9.08"
      }
    ],
    [
      "path",
      {
        "d": "M 8.73 6.34 L 7.73 4.60"
      }
    ],
    [
      "path",
      {
        "d": "M 13.14 5.56 L 13.48 3.59"
      }
    ],
    [
      "path",
      {
        "d": "M 17.01 7.80 L 18.54 6.51"
      }
    ]
  ]
};

export const ThixoOdor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.96 12.00 a 7.04 7.04 0 1 0 14.08 0 a 7.04 7.04 0 1 0 -14.08 0" />
      <path d="M 7.11 12.00 a 4.89 4.89 0 1 1 9.78 0 a 4.89 4.89 0 1 1 -9.78 0" />
      <path d="M 18.54 12.00 L 20.54 12.00" />
      <path d="M 17.01 16.20 L 18.54 17.49" />
      <path d="M 13.14 18.44 L 13.48 20.41" />
      <path d="M 8.73 17.66 L 7.73 19.40" />
      <path d="M 5.85 14.24 L 3.97 14.92" />
      <path d="M 5.85 9.76 L 3.97 9.08" />
      <path d="M 8.73 6.34 L 7.73 4.60" />
      <path d="M 13.14 5.56 L 13.48 3.59" />
      <path d="M 17.01 7.80 L 18.54 6.51" />
      {children}
    </svg>
  );
});

export default ThixoOdor;
