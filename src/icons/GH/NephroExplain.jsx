import React from 'react';

export const iconData = {
  "id": "NephroExplain",
  "name": "NephroExplain",
  "category": "GH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.49 12.00 a 7.51 7.51 0 1 0 15.01 0 a 7.51 7.51 0 1 0 -15.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.17 12.00 a 4.83 4.83 0 1 1 9.66 0 a 4.83 4.83 0 1 1 -9.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.01 12.00 L 21.01 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.67 16.12 L 19.29 17.29"
      }
    ],
    [
      "path",
      {
        "d": "M 14.16 18.66 L 14.78 20.56"
      }
    ],
    [
      "path",
      {
        "d": "M 9.84 18.66 L 9.22 20.56"
      }
    ],
    [
      "path",
      {
        "d": "M 6.33 16.12 L 4.71 17.29"
      }
    ],
    [
      "path",
      {
        "d": "M 4.99 12.00 L 2.99 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.33 7.88 L 4.71 6.71"
      }
    ],
    [
      "path",
      {
        "d": "M 9.84 5.34 L 9.22 3.44"
      }
    ],
    [
      "path",
      {
        "d": "M 14.16 5.34 L 14.78 3.44"
      }
    ],
    [
      "path",
      {
        "d": "M 17.67 7.88 L 19.29 6.71"
      }
    ]
  ]
};

export const NephroExplain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.49 12.00 a 7.51 7.51 0 1 0 15.01 0 a 7.51 7.51 0 1 0 -15.01 0" />
      <path d="M 7.17 12.00 a 4.83 4.83 0 1 1 9.66 0 a 4.83 4.83 0 1 1 -9.66 0" />
      <path d="M 19.01 12.00 L 21.01 12.00" />
      <path d="M 17.67 16.12 L 19.29 17.29" />
      <path d="M 14.16 18.66 L 14.78 20.56" />
      <path d="M 9.84 18.66 L 9.22 20.56" />
      <path d="M 6.33 16.12 L 4.71 17.29" />
      <path d="M 4.99 12.00 L 2.99 12.00" />
      <path d="M 6.33 7.88 L 4.71 6.71" />
      <path d="M 9.84 5.34 L 9.22 3.44" />
      <path d="M 14.16 5.34 L 14.78 3.44" />
      <path d="M 17.67 7.88 L 19.29 6.71" />
      {children}
    </svg>
  );
});

export default NephroExplain;
