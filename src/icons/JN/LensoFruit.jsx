import React from 'react';

export const iconData = {
  "id": "LensoFruit",
  "name": "LensoFruit",
  "category": "JN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.04 5.06 C 11.46 11.32, 19.54 17.88, 17.42 14.72"
      }
    ],
    [
      "path",
      {
        "d": "M 4.48 6.05 C 16.45 4.99, 18.82 12.30, 20.58 18.12"
      }
    ],
    [
      "path",
      {
        "d": "M 3.17 5.54 C 8.79 16.25, 11.34 14.48, 19.08 19.56"
      }
    ],
    [
      "path",
      {
        "d": "M 5.94 3.73 C 4.88 9.02, 8.60 7.33, 19.48 19.34"
      }
    ],
    [
      "path",
      {
        "d": "M 9.83 7.15 C 6.77 16.87, 14.12 6.28, 17.23 21.21"
      }
    ],
    [
      "path",
      {
        "d": "M 8.15 2.37 C 18.88 7.68, 15.09 15.51, 15.82 19.55"
      }
    ]
  ]
};

export const LensoFruit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.04 5.06 C 11.46 11.32, 19.54 17.88, 17.42 14.72" />
      <path d="M 4.48 6.05 C 16.45 4.99, 18.82 12.30, 20.58 18.12" />
      <path d="M 3.17 5.54 C 8.79 16.25, 11.34 14.48, 19.08 19.56" />
      <path d="M 5.94 3.73 C 4.88 9.02, 8.60 7.33, 19.48 19.34" />
      <path d="M 9.83 7.15 C 6.77 16.87, 14.12 6.28, 17.23 21.21" />
      <path d="M 8.15 2.37 C 18.88 7.68, 15.09 15.51, 15.82 19.55" />
      {children}
    </svg>
  );
});

export default LensoFruit;
