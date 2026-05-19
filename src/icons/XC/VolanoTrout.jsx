import React from 'react';

export const iconData = {
  "id": "VolanoTrout",
  "name": "VolanoTrout",
  "category": "XC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.47 12.00 a 8.53 8.53 0 1 0 17.06 0 a 8.53 8.53 0 1 0 -17.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.98 12.00 a 6.02 6.02 0 1 1 12.04 0 a 6.02 6.02 0 1 1 -12.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.03 12.00 L 22.03 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.50 16.72 L 20.11 17.89"
      }
    ],
    [
      "path",
      {
        "d": "M 14.48 19.64 L 15.10 21.54"
      }
    ],
    [
      "path",
      {
        "d": "M 9.52 19.64 L 8.90 21.54"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 16.72 L 3.89 17.89"
      }
    ],
    [
      "path",
      {
        "d": "M 3.97 12.00 L 1.97 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 7.28 L 3.89 6.11"
      }
    ],
    [
      "path",
      {
        "d": "M 9.52 4.36 L 8.90 2.46"
      }
    ],
    [
      "path",
      {
        "d": "M 14.48 4.36 L 15.10 2.46"
      }
    ],
    [
      "path",
      {
        "d": "M 18.50 7.28 L 20.11 6.11"
      }
    ]
  ]
};

export const VolanoTrout = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.47 12.00 a 8.53 8.53 0 1 0 17.06 0 a 8.53 8.53 0 1 0 -17.06 0" />
      <path d="M 5.98 12.00 a 6.02 6.02 0 1 1 12.04 0 a 6.02 6.02 0 1 1 -12.04 0" />
      <path d="M 20.03 12.00 L 22.03 12.00" />
      <path d="M 18.50 16.72 L 20.11 17.89" />
      <path d="M 14.48 19.64 L 15.10 21.54" />
      <path d="M 9.52 19.64 L 8.90 21.54" />
      <path d="M 5.50 16.72 L 3.89 17.89" />
      <path d="M 3.97 12.00 L 1.97 12.00" />
      <path d="M 5.50 7.28 L 3.89 6.11" />
      <path d="M 9.52 4.36 L 8.90 2.46" />
      <path d="M 14.48 4.36 L 15.10 2.46" />
      <path d="M 18.50 7.28 L 20.11 6.11" />
      {children}
    </svg>
  );
});

export default VolanoTrout;
