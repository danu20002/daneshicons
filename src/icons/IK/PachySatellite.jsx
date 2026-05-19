import React from 'react';

export const iconData = {
  "id": "PachySatellite",
  "name": "PachySatellite",
  "category": "IK",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.38 12.00 a 9.62 9.62 0 1 0 19.24 0 a 9.62 9.62 0 1 0 -19.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.93 8.79 a 9.07 2.721016995968611 0 1 0 18.14 0 a 9.07 2.721016995968611 0 1 0 -18.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.93 15.21 a 9.07 2.721016995968611 0 1 0 18.14 0 a 9.07 2.721016995968611 0 1 0 -18.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.80 5.20 A 2 2 0 0 0 18.80 18.80"
      }
    ],
    [
      "path",
      {
        "d": "M 18.80 5.20 A 2 2 0 0 1 18.80 18.80"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.38 A 2 2 0 0 0 12.00 21.62"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.38 A 2 2 0 0 1 12.00 21.62"
      }
    ],
    [
      "path",
      {
        "d": "M 5.20 5.20 A 2 2 0 0 0 5.20 18.80"
      }
    ],
    [
      "path",
      {
        "d": "M 5.20 5.20 A 2 2 0 0 1 5.20 18.80"
      }
    ]
  ]
};

export const PachySatellite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.38 12.00 a 9.62 9.62 0 1 0 19.24 0 a 9.62 9.62 0 1 0 -19.24 0" />
      <path d="M 2.93 8.79 a 9.07 2.721016995968611 0 1 0 18.14 0 a 9.07 2.721016995968611 0 1 0 -18.14 0" />
      <path d="M 2.93 15.21 a 9.07 2.721016995968611 0 1 0 18.14 0 a 9.07 2.721016995968611 0 1 0 -18.14 0" />
      <path d="M 18.80 5.20 A 2 2 0 0 0 18.80 18.80" />
      <path d="M 18.80 5.20 A 2 2 0 0 1 18.80 18.80" />
      <path d="M 12.00 2.38 A 2 2 0 0 0 12.00 21.62" />
      <path d="M 12.00 2.38 A 2 2 0 0 1 12.00 21.62" />
      <path d="M 5.20 5.20 A 2 2 0 0 0 5.20 18.80" />
      <path d="M 5.20 5.20 A 2 2 0 0 1 5.20 18.80" />
      {children}
    </svg>
  );
});

export default PachySatellite;
