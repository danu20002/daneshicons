import React from 'react';

export const iconData = {
  "id": "FronoCredit",
  "name": "FronoCredit",
  "category": "LK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.76 12.00 a 7.24 7.24 0 1 0 14.48 0 a 7.24 7.24 0 1 0 -14.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.33 12.00 a 5.67 5.67 0 1 1 11.34 0 a 5.67 5.67 0 1 1 -11.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.74 12.00 L 20.74 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.45 15.96 L 19.07 17.14"
      }
    ],
    [
      "path",
      {
        "d": "M 14.08 18.41 L 14.70 20.31"
      }
    ],
    [
      "path",
      {
        "d": "M 9.92 18.41 L 9.30 20.31"
      }
    ],
    [
      "path",
      {
        "d": "M 6.55 15.96 L 4.93 17.14"
      }
    ],
    [
      "path",
      {
        "d": "M 5.26 12.00 L 3.26 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.55 8.04 L 4.93 6.86"
      }
    ],
    [
      "path",
      {
        "d": "M 9.92 5.59 L 9.30 3.69"
      }
    ],
    [
      "path",
      {
        "d": "M 14.08 5.59 L 14.70 3.69"
      }
    ],
    [
      "path",
      {
        "d": "M 17.45 8.04 L 19.07 6.86"
      }
    ]
  ]
};

export const FronoCredit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.76 12.00 a 7.24 7.24 0 1 0 14.48 0 a 7.24 7.24 0 1 0 -14.48 0" />
      <path d="M 6.33 12.00 a 5.67 5.67 0 1 1 11.34 0 a 5.67 5.67 0 1 1 -11.34 0" />
      <path d="M 18.74 12.00 L 20.74 12.00" />
      <path d="M 17.45 15.96 L 19.07 17.14" />
      <path d="M 14.08 18.41 L 14.70 20.31" />
      <path d="M 9.92 18.41 L 9.30 20.31" />
      <path d="M 6.55 15.96 L 4.93 17.14" />
      <path d="M 5.26 12.00 L 3.26 12.00" />
      <path d="M 6.55 8.04 L 4.93 6.86" />
      <path d="M 9.92 5.59 L 9.30 3.69" />
      <path d="M 14.08 5.59 L 14.70 3.69" />
      <path d="M 17.45 8.04 L 19.07 6.86" />
      {children}
    </svg>
  );
});

export default FronoCredit;
