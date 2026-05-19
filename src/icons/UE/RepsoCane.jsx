import React from 'react';

export const iconData = {
  "id": "RepsoCane",
  "name": "RepsoCane",
  "category": "UE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.94 12.00 a 7.06 7.06 0 1 0 14.12 0 a 7.06 7.06 0 1 0 -14.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 12.00 a 4.48 4.48 0 1 1 8.96 0 a 4.48 4.48 0 1 1 -8.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.56 12.00 L 20.56 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.09 17.13 L 17.34 18.69"
      }
    ],
    [
      "path",
      {
        "d": "M 10.54 18.39 L 10.10 20.34"
      }
    ],
    [
      "path",
      {
        "d": "M 6.09 14.85 L 4.29 15.71"
      }
    ],
    [
      "path",
      {
        "d": "M 6.09 9.15 L 4.29 8.29"
      }
    ],
    [
      "path",
      {
        "d": "M 10.54 5.61 L 10.10 3.66"
      }
    ],
    [
      "path",
      {
        "d": "M 16.09 6.87 L 17.34 5.31"
      }
    ]
  ]
};

export const RepsoCane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.94 12.00 a 7.06 7.06 0 1 0 14.12 0 a 7.06 7.06 0 1 0 -14.12 0" />
      <path d="M 7.52 12.00 a 4.48 4.48 0 1 1 8.96 0 a 4.48 4.48 0 1 1 -8.96 0" />
      <path d="M 18.56 12.00 L 20.56 12.00" />
      <path d="M 16.09 17.13 L 17.34 18.69" />
      <path d="M 10.54 18.39 L 10.10 20.34" />
      <path d="M 6.09 14.85 L 4.29 15.71" />
      <path d="M 6.09 9.15 L 4.29 8.29" />
      <path d="M 10.54 5.61 L 10.10 3.66" />
      <path d="M 16.09 6.87 L 17.34 5.31" />
      {children}
    </svg>
  );
});

export default RepsoCane;
