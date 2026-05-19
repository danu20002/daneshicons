import React from 'react';

export const iconData = {
  "id": "ZittinoSurplus",
  "name": "ZittinoSurplus",
  "category": "EC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.08 12.00 a 7.92 7.92 0 1 0 15.83 0 a 7.92 7.92 0 1 0 -15.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.59 12.00 a 5.41 5.41 0 1 1 10.81 0 a 5.41 5.41 0 1 1 -10.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.42 12.00 L 21.42 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.68 16.77 L 19.21 18.05"
      }
    ],
    [
      "path",
      {
        "d": "M 13.29 19.30 L 13.64 21.27"
      }
    ],
    [
      "path",
      {
        "d": "M 8.29 18.42 L 7.29 20.15"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 14.54 L 3.15 15.22"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 9.46 L 3.15 8.78"
      }
    ],
    [
      "path",
      {
        "d": "M 8.29 5.58 L 7.29 3.85"
      }
    ],
    [
      "path",
      {
        "d": "M 13.29 4.70 L 13.64 2.73"
      }
    ],
    [
      "path",
      {
        "d": "M 17.68 7.23 L 19.21 5.95"
      }
    ]
  ]
};

export const ZittinoSurplus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.08 12.00 a 7.92 7.92 0 1 0 15.83 0 a 7.92 7.92 0 1 0 -15.83 0" />
      <path d="M 6.59 12.00 a 5.41 5.41 0 1 1 10.81 0 a 5.41 5.41 0 1 1 -10.81 0" />
      <path d="M 19.42 12.00 L 21.42 12.00" />
      <path d="M 17.68 16.77 L 19.21 18.05" />
      <path d="M 13.29 19.30 L 13.64 21.27" />
      <path d="M 8.29 18.42 L 7.29 20.15" />
      <path d="M 5.03 14.54 L 3.15 15.22" />
      <path d="M 5.03 9.46 L 3.15 8.78" />
      <path d="M 8.29 5.58 L 7.29 3.85" />
      <path d="M 13.29 4.70 L 13.64 2.73" />
      <path d="M 17.68 7.23 L 19.21 5.95" />
      {children}
    </svg>
  );
});

export default ZittinoSurplus;
