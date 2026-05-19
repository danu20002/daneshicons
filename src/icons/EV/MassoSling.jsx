import React from 'react';

export const iconData = {
  "id": "MassoSling",
  "name": "MassoSling",
  "category": "EV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.48 12.00 a 8.52 8.52 0 1 0 17.04 0 a 8.52 8.52 0 1 0 -17.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.22 12.00 a 5.78 5.78 0 1 1 11.57 0 a 5.78 5.78 0 1 1 -11.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.02 12.00 L 22.02 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.14 17.15 L 19.67 18.44"
      }
    ],
    [
      "path",
      {
        "d": "M 13.39 19.90 L 13.74 21.87"
      }
    ],
    [
      "path",
      {
        "d": "M 7.99 18.94 L 6.99 20.68"
      }
    ],
    [
      "path",
      {
        "d": "M 4.47 14.74 L 2.59 15.43"
      }
    ],
    [
      "path",
      {
        "d": "M 4.47 9.26 L 2.59 8.57"
      }
    ],
    [
      "path",
      {
        "d": "M 7.99 5.06 L 6.99 3.32"
      }
    ],
    [
      "path",
      {
        "d": "M 13.39 4.10 L 13.74 2.13"
      }
    ],
    [
      "path",
      {
        "d": "M 18.14 6.85 L 19.67 5.56"
      }
    ]
  ]
};

export const MassoSling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.48 12.00 a 8.52 8.52 0 1 0 17.04 0 a 8.52 8.52 0 1 0 -17.04 0" />
      <path d="M 6.22 12.00 a 5.78 5.78 0 1 1 11.57 0 a 5.78 5.78 0 1 1 -11.57 0" />
      <path d="M 20.02 12.00 L 22.02 12.00" />
      <path d="M 18.14 17.15 L 19.67 18.44" />
      <path d="M 13.39 19.90 L 13.74 21.87" />
      <path d="M 7.99 18.94 L 6.99 20.68" />
      <path d="M 4.47 14.74 L 2.59 15.43" />
      <path d="M 4.47 9.26 L 2.59 8.57" />
      <path d="M 7.99 5.06 L 6.99 3.32" />
      <path d="M 13.39 4.10 L 13.74 2.13" />
      <path d="M 18.14 6.85 L 19.67 5.56" />
      {children}
    </svg>
  );
});

export default MassoSling;
