import React from 'react';

export const iconData = {
  "id": "VerlenRapid",
  "name": "VerlenRapid",
  "category": "RZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.63 12.00 a 8.37 8.37 0 1 0 16.74 0 a 8.37 8.37 0 1 0 -16.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 12.00 a 6.45 6.45 0 1 1 12.90 0 a 6.45 6.45 0 1 1 -12.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.87 12.00 L 21.87 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.91 18.15 L 18.15 19.72"
      }
    ],
    [
      "path",
      {
        "d": "M 10.25 19.67 L 9.80 21.62"
      }
    ],
    [
      "path",
      {
        "d": "M 4.91 15.41 L 3.11 16.28"
      }
    ],
    [
      "path",
      {
        "d": "M 4.91 8.59 L 3.11 7.72"
      }
    ],
    [
      "path",
      {
        "d": "M 10.25 4.33 L 9.80 2.38"
      }
    ],
    [
      "path",
      {
        "d": "M 16.91 5.85 L 18.15 4.28"
      }
    ]
  ]
};

export const VerlenRapid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.63 12.00 a 8.37 8.37 0 1 0 16.74 0 a 8.37 8.37 0 1 0 -16.74 0" />
      <path d="M 5.55 12.00 a 6.45 6.45 0 1 1 12.90 0 a 6.45 6.45 0 1 1 -12.90 0" />
      <path d="M 19.87 12.00 L 21.87 12.00" />
      <path d="M 16.91 18.15 L 18.15 19.72" />
      <path d="M 10.25 19.67 L 9.80 21.62" />
      <path d="M 4.91 15.41 L 3.11 16.28" />
      <path d="M 4.91 8.59 L 3.11 7.72" />
      <path d="M 10.25 4.33 L 9.80 2.38" />
      <path d="M 16.91 5.85 L 18.15 4.28" />
      {children}
    </svg>
  );
});

export default VerlenRapid;
