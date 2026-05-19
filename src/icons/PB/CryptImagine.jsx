import React from 'react';

export const iconData = {
  "id": "CryptImagine",
  "name": "CryptImagine",
  "category": "PB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.64 12.00 a 7.36 7.36 0 1 0 14.72 0 a 7.36 7.36 0 1 0 -14.72 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.29 12.00 a 5.71 5.71 0 1 1 11.43 0 a 5.71 5.71 0 1 1 -11.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.86 12.00 L 20.86 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.85 16.85 L 18.27 18.27"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.86 L 12.00 20.86"
      }
    ],
    [
      "path",
      {
        "d": "M 7.15 16.85 L 5.73 18.27"
      }
    ],
    [
      "path",
      {
        "d": "M 5.14 12.00 L 3.14 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.15 7.15 L 5.73 5.73"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.14 L 12.00 3.14"
      }
    ],
    [
      "path",
      {
        "d": "M 16.85 7.15 L 18.27 5.73"
      }
    ]
  ]
};

export const CryptImagine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.64 12.00 a 7.36 7.36 0 1 0 14.72 0 a 7.36 7.36 0 1 0 -14.72 0" />
      <path d="M 6.29 12.00 a 5.71 5.71 0 1 1 11.43 0 a 5.71 5.71 0 1 1 -11.43 0" />
      <path d="M 18.86 12.00 L 20.86 12.00" />
      <path d="M 16.85 16.85 L 18.27 18.27" />
      <path d="M 12.00 18.86 L 12.00 20.86" />
      <path d="M 7.15 16.85 L 5.73 18.27" />
      <path d="M 5.14 12.00 L 3.14 12.00" />
      <path d="M 7.15 7.15 L 5.73 5.73" />
      <path d="M 12.00 5.14 L 12.00 3.14" />
      <path d="M 16.85 7.15 L 18.27 5.73" />
      {children}
    </svg>
  );
});

export default CryptImagine;
