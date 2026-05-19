import React from 'react';

export const iconData = {
  "id": "VirtuPhase",
  "name": "VirtuPhase",
  "category": "Y",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.54 12.00 a 7.46 7.46 0 1 0 14.92 0 a 7.46 7.46 0 1 0 -14.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.79 12.00 a 5.21 5.21 0 1 1 10.42 0 a 5.21 5.21 0 1 1 -10.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.96 12.00 L 20.96 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.86 15.76 L 19.54 16.85"
      }
    ],
    [
      "path",
      {
        "d": "M 14.89 18.33 L 15.72 20.15"
      }
    ],
    [
      "path",
      {
        "d": "M 11.01 18.89 L 10.72 20.87"
      }
    ],
    [
      "path",
      {
        "d": "M 7.44 17.26 L 6.13 18.77"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 13.96 L 3.40 14.52"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 10.04 L 3.40 9.48"
      }
    ],
    [
      "path",
      {
        "d": "M 7.44 6.74 L 6.13 5.23"
      }
    ],
    [
      "path",
      {
        "d": "M 11.01 5.11 L 10.72 3.13"
      }
    ],
    [
      "path",
      {
        "d": "M 14.89 5.67 L 15.72 3.85"
      }
    ],
    [
      "path",
      {
        "d": "M 17.86 8.24 L 19.54 7.15"
      }
    ]
  ]
};

export const VirtuPhase = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.54 12.00 a 7.46 7.46 0 1 0 14.92 0 a 7.46 7.46 0 1 0 -14.92 0" />
      <path d="M 6.79 12.00 a 5.21 5.21 0 1 1 10.42 0 a 5.21 5.21 0 1 1 -10.42 0" />
      <path d="M 18.96 12.00 L 20.96 12.00" />
      <path d="M 17.86 15.76 L 19.54 16.85" />
      <path d="M 14.89 18.33 L 15.72 20.15" />
      <path d="M 11.01 18.89 L 10.72 20.87" />
      <path d="M 7.44 17.26 L 6.13 18.77" />
      <path d="M 5.32 13.96 L 3.40 14.52" />
      <path d="M 5.32 10.04 L 3.40 9.48" />
      <path d="M 7.44 6.74 L 6.13 5.23" />
      <path d="M 11.01 5.11 L 10.72 3.13" />
      <path d="M 14.89 5.67 L 15.72 3.85" />
      <path d="M 17.86 8.24 L 19.54 7.15" />
      {children}
    </svg>
  );
});

export default VirtuPhase;
