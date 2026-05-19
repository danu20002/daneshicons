import React from 'react';

export const iconData = {
  "id": "KryptoUnfold",
  "name": "KryptoUnfold",
  "category": "SQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.52 12.00 a 8.48 8.48 0 1 0 16.97 0 a 8.48 8.48 0 1 0 -16.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.65 7.76 a 7.35 2.203983580431851 0 1 0 14.69 0 a 7.35 2.203983580431851 0 1 0 -14.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.52 12.00 a 8.48 2.5449410269036887 0 1 0 16.97 0 a 8.48 2.5449410269036887 0 1 0 -16.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.65 16.24 a 7.35 2.203983580431851 0 1 0 14.69 0 a 7.35 2.203983580431851 0 1 0 -14.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.24 4.65 A 2 2 0 0 0 16.24 19.35"
      }
    ],
    [
      "path",
      {
        "d": "M 16.24 4.65 A 2 2 0 0 1 16.24 19.35"
      }
    ],
    [
      "path",
      {
        "d": "M 7.76 4.65 A 2 2 0 0 0 7.76 19.35"
      }
    ],
    [
      "path",
      {
        "d": "M 7.76 4.65 A 2 2 0 0 1 7.76 19.35"
      }
    ]
  ]
};

export const KryptoUnfold = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.52 12.00 a 8.48 8.48 0 1 0 16.97 0 a 8.48 8.48 0 1 0 -16.97 0" />
      <path d="M 4.65 7.76 a 7.35 2.203983580431851 0 1 0 14.69 0 a 7.35 2.203983580431851 0 1 0 -14.69 0" />
      <path d="M 3.52 12.00 a 8.48 2.5449410269036887 0 1 0 16.97 0 a 8.48 2.5449410269036887 0 1 0 -16.97 0" />
      <path d="M 4.65 16.24 a 7.35 2.203983580431851 0 1 0 14.69 0 a 7.35 2.203983580431851 0 1 0 -14.69 0" />
      <path d="M 16.24 4.65 A 2 2 0 0 0 16.24 19.35" />
      <path d="M 16.24 4.65 A 2 2 0 0 1 16.24 19.35" />
      <path d="M 7.76 4.65 A 2 2 0 0 0 7.76 19.35" />
      <path d="M 7.76 4.65 A 2 2 0 0 1 7.76 19.35" />
      {children}
    </svg>
  );
});

export default KryptoUnfold;
