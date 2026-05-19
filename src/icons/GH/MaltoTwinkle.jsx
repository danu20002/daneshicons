import React from 'react';

export const iconData = {
  "id": "MaltoTwinkle",
  "name": "MaltoTwinkle",
  "category": "GH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.04 12.00 a 7.96 7.96 0 1 0 15.91 0 a 7.96 7.96 0 1 0 -15.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.68 12.00 a 5.32 5.32 0 1 1 10.65 0 a 5.32 5.32 0 1 1 -10.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.46 12.00 L 21.46 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.27 16.03 L 19.95 17.11"
      }
    ],
    [
      "path",
      {
        "d": "M 15.10 18.78 L 15.93 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 10.94 19.38 L 10.65 21.36"
      }
    ],
    [
      "path",
      {
        "d": "M 7.12 17.63 L 5.81 19.15"
      }
    ],
    [
      "path",
      {
        "d": "M 4.85 14.10 L 2.93 14.66"
      }
    ],
    [
      "path",
      {
        "d": "M 4.85 9.90 L 2.93 9.34"
      }
    ],
    [
      "path",
      {
        "d": "M 7.12 6.37 L 5.81 4.85"
      }
    ],
    [
      "path",
      {
        "d": "M 10.94 4.62 L 10.65 2.64"
      }
    ],
    [
      "path",
      {
        "d": "M 15.10 5.22 L 15.93 3.40"
      }
    ],
    [
      "path",
      {
        "d": "M 18.27 7.97 L 19.95 6.89"
      }
    ]
  ]
};

export const MaltoTwinkle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.04 12.00 a 7.96 7.96 0 1 0 15.91 0 a 7.96 7.96 0 1 0 -15.91 0" />
      <path d="M 6.68 12.00 a 5.32 5.32 0 1 1 10.65 0 a 5.32 5.32 0 1 1 -10.65 0" />
      <path d="M 19.46 12.00 L 21.46 12.00" />
      <path d="M 18.27 16.03 L 19.95 17.11" />
      <path d="M 15.10 18.78 L 15.93 20.60" />
      <path d="M 10.94 19.38 L 10.65 21.36" />
      <path d="M 7.12 17.63 L 5.81 19.15" />
      <path d="M 4.85 14.10 L 2.93 14.66" />
      <path d="M 4.85 9.90 L 2.93 9.34" />
      <path d="M 7.12 6.37 L 5.81 4.85" />
      <path d="M 10.94 4.62 L 10.65 2.64" />
      <path d="M 15.10 5.22 L 15.93 3.40" />
      <path d="M 18.27 7.97 L 19.95 6.89" />
      {children}
    </svg>
  );
});

export default MaltoTwinkle;
