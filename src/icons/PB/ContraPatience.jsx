import React from 'react';

export const iconData = {
  "id": "ContraPatience",
  "name": "ContraPatience",
  "category": "PB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.41 12.00 a 7.59 7.59 0 1 0 15.17 0 a 7.59 7.59 0 1 0 -15.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.54 12.00 a 5.46 5.46 0 1 1 10.91 0 a 5.46 5.46 0 1 1 -10.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.09 12.00 L 21.09 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.73 16.17 L 19.35 17.34"
      }
    ],
    [
      "path",
      {
        "d": "M 14.19 18.74 L 14.81 20.64"
      }
    ],
    [
      "path",
      {
        "d": "M 9.81 18.74 L 9.19 20.64"
      }
    ],
    [
      "path",
      {
        "d": "M 6.27 16.17 L 4.65 17.34"
      }
    ],
    [
      "path",
      {
        "d": "M 4.91 12.00 L 2.91 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.27 7.83 L 4.65 6.66"
      }
    ],
    [
      "path",
      {
        "d": "M 9.81 5.26 L 9.19 3.36"
      }
    ],
    [
      "path",
      {
        "d": "M 14.19 5.26 L 14.81 3.36"
      }
    ],
    [
      "path",
      {
        "d": "M 17.73 7.83 L 19.35 6.66"
      }
    ]
  ]
};

export const ContraPatience = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.41 12.00 a 7.59 7.59 0 1 0 15.17 0 a 7.59 7.59 0 1 0 -15.17 0" />
      <path d="M 6.54 12.00 a 5.46 5.46 0 1 1 10.91 0 a 5.46 5.46 0 1 1 -10.91 0" />
      <path d="M 19.09 12.00 L 21.09 12.00" />
      <path d="M 17.73 16.17 L 19.35 17.34" />
      <path d="M 14.19 18.74 L 14.81 20.64" />
      <path d="M 9.81 18.74 L 9.19 20.64" />
      <path d="M 6.27 16.17 L 4.65 17.34" />
      <path d="M 4.91 12.00 L 2.91 12.00" />
      <path d="M 6.27 7.83 L 4.65 6.66" />
      <path d="M 9.81 5.26 L 9.19 3.36" />
      <path d="M 14.19 5.26 L 14.81 3.36" />
      <path d="M 17.73 7.83 L 19.35 6.66" />
      {children}
    </svg>
  );
});

export default ContraPatience;
