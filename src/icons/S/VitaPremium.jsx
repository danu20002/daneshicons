import React from 'react';

export const iconData = {
  "id": "VitaPremium",
  "name": "VitaPremium",
  "category": "S",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.79 12.00 a 8.21 8.21 0 1 0 16.42 0 a 8.21 8.21 0 1 0 -16.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.91 12.00 a 6.09 6.09 0 1 1 12.17 0 a 6.09 6.09 0 1 1 -12.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.71 12.00 L 21.71 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.49 16.17 L 20.17 17.25"
      }
    ],
    [
      "path",
      {
        "d": "M 15.20 19.01 L 16.03 20.83"
      }
    ],
    [
      "path",
      {
        "d": "M 10.90 19.63 L 10.62 21.61"
      }
    ],
    [
      "path",
      {
        "d": "M 6.95 17.83 L 5.64 19.34"
      }
    ],
    [
      "path",
      {
        "d": "M 4.60 14.17 L 2.68 14.74"
      }
    ],
    [
      "path",
      {
        "d": "M 4.60 9.83 L 2.68 9.26"
      }
    ],
    [
      "path",
      {
        "d": "M 6.95 6.17 L 5.64 4.66"
      }
    ],
    [
      "path",
      {
        "d": "M 10.90 4.37 L 10.62 2.39"
      }
    ],
    [
      "path",
      {
        "d": "M 15.20 4.99 L 16.03 3.17"
      }
    ],
    [
      "path",
      {
        "d": "M 18.49 7.83 L 20.17 6.75"
      }
    ]
  ]
};

export const VitaPremium = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.79 12.00 a 8.21 8.21 0 1 0 16.42 0 a 8.21 8.21 0 1 0 -16.42 0" />
      <path d="M 5.91 12.00 a 6.09 6.09 0 1 1 12.17 0 a 6.09 6.09 0 1 1 -12.17 0" />
      <path d="M 19.71 12.00 L 21.71 12.00" />
      <path d="M 18.49 16.17 L 20.17 17.25" />
      <path d="M 15.20 19.01 L 16.03 20.83" />
      <path d="M 10.90 19.63 L 10.62 21.61" />
      <path d="M 6.95 17.83 L 5.64 19.34" />
      <path d="M 4.60 14.17 L 2.68 14.74" />
      <path d="M 4.60 9.83 L 2.68 9.26" />
      <path d="M 6.95 6.17 L 5.64 4.66" />
      <path d="M 10.90 4.37 L 10.62 2.39" />
      <path d="M 15.20 4.99 L 16.03 3.17" />
      <path d="M 18.49 7.83 L 20.17 6.75" />
      {children}
    </svg>
  );
});

export default VitaPremium;
