import React from 'react';

export const iconData = {
  "id": "DigiSlot",
  "name": "DigiSlot",
  "category": "XC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.51 12.00 a 7.49 7.49 0 1 0 14.97 0 a 7.49 7.49 0 1 0 -14.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.20 12.00 a 4.80 4.80 0 1 1 9.60 0 a 4.80 4.80 0 1 1 -9.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.99 12.00 L 20.99 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.36 17.46 L 17.60 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 10.45 18.81 L 10.00 20.76"
      }
    ],
    [
      "path",
      {
        "d": "M 5.71 15.03 L 3.90 15.90"
      }
    ],
    [
      "path",
      {
        "d": "M 5.71 8.97 L 3.90 8.10"
      }
    ],
    [
      "path",
      {
        "d": "M 10.45 5.19 L 10.00 3.24"
      }
    ],
    [
      "path",
      {
        "d": "M 16.36 6.54 L 17.60 4.97"
      }
    ]
  ]
};

export const DigiSlot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.51 12.00 a 7.49 7.49 0 1 0 14.97 0 a 7.49 7.49 0 1 0 -14.97 0" />
      <path d="M 7.20 12.00 a 4.80 4.80 0 1 1 9.60 0 a 4.80 4.80 0 1 1 -9.60 0" />
      <path d="M 18.99 12.00 L 20.99 12.00" />
      <path d="M 16.36 17.46 L 17.60 19.03" />
      <path d="M 10.45 18.81 L 10.00 20.76" />
      <path d="M 5.71 15.03 L 3.90 15.90" />
      <path d="M 5.71 8.97 L 3.90 8.10" />
      <path d="M 10.45 5.19 L 10.00 3.24" />
      <path d="M 16.36 6.54 L 17.60 4.97" />
      {children}
    </svg>
  );
});

export default DigiSlot;
