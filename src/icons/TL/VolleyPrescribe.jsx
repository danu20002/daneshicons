import React from 'react';

export const iconData = {
  "id": "VolleyPrescribe",
  "name": "VolleyPrescribe",
  "category": "TL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.34 12.00 a 8.66 8.66 0 1 0 17.32 0 a 8.66 8.66 0 1 0 -17.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.74 12.00 a 6.26 6.26 0 1 1 12.53 0 a 6.26 6.26 0 1 1 -12.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.16 12.00 L 22.16 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.60 16.80 L 20.22 17.97"
      }
    ],
    [
      "path",
      {
        "d": "M 14.52 19.76 L 15.14 21.66"
      }
    ],
    [
      "path",
      {
        "d": "M 9.48 19.76 L 8.86 21.66"
      }
    ],
    [
      "path",
      {
        "d": "M 5.40 16.80 L 3.78 17.97"
      }
    ],
    [
      "path",
      {
        "d": "M 3.84 12.00 L 1.84 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.40 7.20 L 3.78 6.03"
      }
    ],
    [
      "path",
      {
        "d": "M 9.48 4.24 L 8.86 2.34"
      }
    ],
    [
      "path",
      {
        "d": "M 14.52 4.24 L 15.14 2.34"
      }
    ],
    [
      "path",
      {
        "d": "M 18.60 7.20 L 20.22 6.03"
      }
    ]
  ]
};

export const VolleyPrescribe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.34 12.00 a 8.66 8.66 0 1 0 17.32 0 a 8.66 8.66 0 1 0 -17.32 0" />
      <path d="M 5.74 12.00 a 6.26 6.26 0 1 1 12.53 0 a 6.26 6.26 0 1 1 -12.53 0" />
      <path d="M 20.16 12.00 L 22.16 12.00" />
      <path d="M 18.60 16.80 L 20.22 17.97" />
      <path d="M 14.52 19.76 L 15.14 21.66" />
      <path d="M 9.48 19.76 L 8.86 21.66" />
      <path d="M 5.40 16.80 L 3.78 17.97" />
      <path d="M 3.84 12.00 L 1.84 12.00" />
      <path d="M 5.40 7.20 L 3.78 6.03" />
      <path d="M 9.48 4.24 L 8.86 2.34" />
      <path d="M 14.52 4.24 L 15.14 2.34" />
      <path d="M 18.60 7.20 L 20.22 6.03" />
      {children}
    </svg>
  );
});

export default VolleyPrescribe;
