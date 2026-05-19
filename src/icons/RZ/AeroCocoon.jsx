import React from 'react';

export const iconData = {
  "id": "AeroCocoon",
  "name": "AeroCocoon",
  "category": "RZ",
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
        "d": "M 7.50 12.00 a 4.50 4.50 0 1 1 9.00 0 a 4.50 4.50 0 1 1 -9.00 0"
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
        "d": "M 17.33 16.47 L 18.86 17.76"
      }
    ],
    [
      "path",
      {
        "d": "M 13.21 18.85 L 13.56 20.82"
      }
    ],
    [
      "path",
      {
        "d": "M 8.52 18.03 L 7.52 19.76"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 14.38 L 3.58 15.06"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 9.62 L 3.58 8.94"
      }
    ],
    [
      "path",
      {
        "d": "M 8.52 5.97 L 7.52 4.24"
      }
    ],
    [
      "path",
      {
        "d": "M 13.21 5.15 L 13.56 3.18"
      }
    ],
    [
      "path",
      {
        "d": "M 17.33 7.53 L 18.86 6.24"
      }
    ]
  ]
};

export const AeroCocoon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.50 12.00 a 4.50 4.50 0 1 1 9.00 0 a 4.50 4.50 0 1 1 -9.00 0" />
      <path d="M 18.96 12.00 L 20.96 12.00" />
      <path d="M 17.33 16.47 L 18.86 17.76" />
      <path d="M 13.21 18.85 L 13.56 20.82" />
      <path d="M 8.52 18.03 L 7.52 19.76" />
      <path d="M 5.46 14.38 L 3.58 15.06" />
      <path d="M 5.46 9.62 L 3.58 8.94" />
      <path d="M 8.52 5.97 L 7.52 4.24" />
      <path d="M 13.21 5.15 L 13.56 3.18" />
      <path d="M 17.33 7.53 L 18.86 6.24" />
      {children}
    </svg>
  );
});

export default AeroCocoon;
