import React from 'react';

export const iconData = {
  "id": "XenotimFrigate",
  "name": "XenotimFrigate",
  "category": "OI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.31 12.00 a 8.69 8.69 0 1 0 17.37 0 a 8.69 8.69 0 1 0 -17.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 12.00 a 6.54 6.54 0 1 1 13.07 0 a 6.54 6.54 0 1 1 -13.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.19 12.00 L 22.19 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.62 16.81 L 20.24 17.99"
      }
    ],
    [
      "path",
      {
        "d": "M 14.53 19.79 L 15.15 21.69"
      }
    ],
    [
      "path",
      {
        "d": "M 9.47 19.79 L 8.85 21.69"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 16.81 L 3.76 17.99"
      }
    ],
    [
      "path",
      {
        "d": "M 3.81 12.00 L 1.81 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 7.19 L 3.76 6.01"
      }
    ],
    [
      "path",
      {
        "d": "M 9.47 4.21 L 8.85 2.31"
      }
    ],
    [
      "path",
      {
        "d": "M 14.53 4.21 L 15.15 2.31"
      }
    ],
    [
      "path",
      {
        "d": "M 18.62 7.19 L 20.24 6.01"
      }
    ]
  ]
};

export const XenotimFrigate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.31 12.00 a 8.69 8.69 0 1 0 17.37 0 a 8.69 8.69 0 1 0 -17.37 0" />
      <path d="M 5.46 12.00 a 6.54 6.54 0 1 1 13.07 0 a 6.54 6.54 0 1 1 -13.07 0" />
      <path d="M 20.19 12.00 L 22.19 12.00" />
      <path d="M 18.62 16.81 L 20.24 17.99" />
      <path d="M 14.53 19.79 L 15.15 21.69" />
      <path d="M 9.47 19.79 L 8.85 21.69" />
      <path d="M 5.38 16.81 L 3.76 17.99" />
      <path d="M 3.81 12.00 L 1.81 12.00" />
      <path d="M 5.38 7.19 L 3.76 6.01" />
      <path d="M 9.47 4.21 L 8.85 2.31" />
      <path d="M 14.53 4.21 L 15.15 2.31" />
      <path d="M 18.62 7.19 L 20.24 6.01" />
      {children}
    </svg>
  );
});

export default XenotimFrigate;
