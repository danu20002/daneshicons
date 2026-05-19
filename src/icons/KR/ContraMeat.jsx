import React from 'react';

export const iconData = {
  "id": "ContraMeat",
  "name": "ContraMeat",
  "category": "KR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.33 12.00 a 8.67 8.67 0 1 0 17.34 0 a 8.67 8.67 0 1 0 -17.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.23 12.00 a 5.77 5.77 0 1 1 11.55 0 a 5.77 5.77 0 1 1 -11.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.17 12.00 L 22.17 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.09 18.39 L 18.34 19.95"
      }
    ],
    [
      "path",
      {
        "d": "M 10.18 19.97 L 9.74 21.92"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 15.55 L 2.84 16.41"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 8.45 L 2.84 7.59"
      }
    ],
    [
      "path",
      {
        "d": "M 10.18 4.03 L 9.74 2.08"
      }
    ],
    [
      "path",
      {
        "d": "M 17.09 5.61 L 18.34 4.05"
      }
    ]
  ]
};

export const ContraMeat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.33 12.00 a 8.67 8.67 0 1 0 17.34 0 a 8.67 8.67 0 1 0 -17.34 0" />
      <path d="M 6.23 12.00 a 5.77 5.77 0 1 1 11.55 0 a 5.77 5.77 0 1 1 -11.55 0" />
      <path d="M 20.17 12.00 L 22.17 12.00" />
      <path d="M 17.09 18.39 L 18.34 19.95" />
      <path d="M 10.18 19.97 L 9.74 21.92" />
      <path d="M 4.64 15.55 L 2.84 16.41" />
      <path d="M 4.64 8.45 L 2.84 7.59" />
      <path d="M 10.18 4.03 L 9.74 2.08" />
      <path d="M 17.09 5.61 L 18.34 4.05" />
      {children}
    </svg>
  );
});

export default ContraMeat;
