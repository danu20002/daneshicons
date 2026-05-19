import React from 'react';

export const iconData = {
  "id": "ScapoMobile",
  "name": "ScapoMobile",
  "category": "MW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.44 12.00 a 8.56 8.56 0 1 0 17.11 0 a 8.56 8.56 0 1 0 -17.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.30 12.00 a 6.70 6.70 0 1 1 13.39 0 a 6.70 6.70 0 1 1 -13.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.06 12.00 L 22.06 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.52 16.74 L 20.14 17.91"
      }
    ],
    [
      "path",
      {
        "d": "M 14.49 19.66 L 15.11 21.56"
      }
    ],
    [
      "path",
      {
        "d": "M 9.51 19.66 L 8.89 21.56"
      }
    ],
    [
      "path",
      {
        "d": "M 5.48 16.74 L 3.86 17.91"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 12.00 L 1.94 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.48 7.26 L 3.86 6.09"
      }
    ],
    [
      "path",
      {
        "d": "M 9.51 4.34 L 8.89 2.44"
      }
    ],
    [
      "path",
      {
        "d": "M 14.49 4.34 L 15.11 2.44"
      }
    ],
    [
      "path",
      {
        "d": "M 18.52 7.26 L 20.14 6.09"
      }
    ]
  ]
};

export const ScapoMobile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.44 12.00 a 8.56 8.56 0 1 0 17.11 0 a 8.56 8.56 0 1 0 -17.11 0" />
      <path d="M 5.30 12.00 a 6.70 6.70 0 1 1 13.39 0 a 6.70 6.70 0 1 1 -13.39 0" />
      <path d="M 20.06 12.00 L 22.06 12.00" />
      <path d="M 18.52 16.74 L 20.14 17.91" />
      <path d="M 14.49 19.66 L 15.11 21.56" />
      <path d="M 9.51 19.66 L 8.89 21.56" />
      <path d="M 5.48 16.74 L 3.86 17.91" />
      <path d="M 3.94 12.00 L 1.94 12.00" />
      <path d="M 5.48 7.26 L 3.86 6.09" />
      <path d="M 9.51 4.34 L 8.89 2.44" />
      <path d="M 14.49 4.34 L 15.11 2.44" />
      <path d="M 18.52 7.26 L 20.14 6.09" />
      {children}
    </svg>
  );
});

export default ScapoMobile;
