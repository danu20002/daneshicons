import React from 'react';

export const iconData = {
  "id": "VendemSalvage",
  "name": "VendemSalvage",
  "category": "QN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.29 12.00 a 8.71 8.71 0 1 0 17.43 0 a 8.71 8.71 0 1 0 -17.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.07 12.00 a 5.93 5.93 0 1 1 11.87 0 a 5.93 5.93 0 1 1 -11.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.21 12.00 L 22.21 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.81 17.81 L 19.22 19.22"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.21 L 12.00 22.21"
      }
    ],
    [
      "path",
      {
        "d": "M 6.19 17.81 L 4.78 19.22"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 12.00 L 1.79 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.19 6.19 L 4.78 4.78"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.79 L 12.00 1.79"
      }
    ],
    [
      "path",
      {
        "d": "M 17.81 6.19 L 19.22 4.78"
      }
    ]
  ]
};

export const VendemSalvage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.29 12.00 a 8.71 8.71 0 1 0 17.43 0 a 8.71 8.71 0 1 0 -17.43 0" />
      <path d="M 6.07 12.00 a 5.93 5.93 0 1 1 11.87 0 a 5.93 5.93 0 1 1 -11.87 0" />
      <path d="M 20.21 12.00 L 22.21 12.00" />
      <path d="M 17.81 17.81 L 19.22 19.22" />
      <path d="M 12.00 20.21 L 12.00 22.21" />
      <path d="M 6.19 17.81 L 4.78 19.22" />
      <path d="M 3.79 12.00 L 1.79 12.00" />
      <path d="M 6.19 6.19 L 4.78 4.78" />
      <path d="M 12.00 3.79 L 12.00 1.79" />
      <path d="M 17.81 6.19 L 19.22 4.78" />
      {children}
    </svg>
  );
});

export default VendemSalvage;
