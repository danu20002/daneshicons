import React from 'react';

export const iconData = {
  "id": "ModuToss",
  "name": "ModuToss",
  "category": "JY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.87 12.00 a 7.13 7.13 0 1 0 14.27 0 a 7.13 7.13 0 1 0 -14.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.37 12.00 a 4.63 4.63 0 1 1 9.25 0 a 4.63 4.63 0 1 1 -9.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.63 12.00 L 20.63 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.37 15.90 L 18.98 17.07"
      }
    ],
    [
      "path",
      {
        "d": "M 14.05 18.31 L 14.67 20.21"
      }
    ],
    [
      "path",
      {
        "d": "M 9.95 18.31 L 9.33 20.21"
      }
    ],
    [
      "path",
      {
        "d": "M 6.63 15.90 L 5.02 17.07"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 12.00 L 3.37 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.63 8.10 L 5.02 6.93"
      }
    ],
    [
      "path",
      {
        "d": "M 9.95 5.69 L 9.33 3.79"
      }
    ],
    [
      "path",
      {
        "d": "M 14.05 5.69 L 14.67 3.79"
      }
    ],
    [
      "path",
      {
        "d": "M 17.37 8.10 L 18.98 6.93"
      }
    ]
  ]
};

export const ModuToss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.87 12.00 a 7.13 7.13 0 1 0 14.27 0 a 7.13 7.13 0 1 0 -14.27 0" />
      <path d="M 7.37 12.00 a 4.63 4.63 0 1 1 9.25 0 a 4.63 4.63 0 1 1 -9.25 0" />
      <path d="M 18.63 12.00 L 20.63 12.00" />
      <path d="M 17.37 15.90 L 18.98 17.07" />
      <path d="M 14.05 18.31 L 14.67 20.21" />
      <path d="M 9.95 18.31 L 9.33 20.21" />
      <path d="M 6.63 15.90 L 5.02 17.07" />
      <path d="M 5.37 12.00 L 3.37 12.00" />
      <path d="M 6.63 8.10 L 5.02 6.93" />
      <path d="M 9.95 5.69 L 9.33 3.79" />
      <path d="M 14.05 5.69 L 14.67 3.79" />
      <path d="M 17.37 8.10 L 18.98 6.93" />
      {children}
    </svg>
  );
});

export default ModuToss;
