import React from 'react';

export const iconData = {
  "id": "CryptTrick",
  "name": "CryptTrick",
  "category": "VQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.40 12.00 a 8.60 8.60 0 1 0 17.21 0 a 8.60 8.60 0 1 0 -17.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.79 12.00 a 6.21 6.21 0 1 1 12.43 0 a 6.21 6.21 0 1 1 -12.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.10 12.00 L 22.10 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.73 17.73 L 19.14 19.14"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.10 L 12.00 22.10"
      }
    ],
    [
      "path",
      {
        "d": "M 6.27 17.73 L 4.86 19.14"
      }
    ],
    [
      "path",
      {
        "d": "M 3.90 12.00 L 1.90 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.27 6.27 L 4.86 4.86"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.90 L 12.00 1.90"
      }
    ],
    [
      "path",
      {
        "d": "M 17.73 6.27 L 19.14 4.86"
      }
    ]
  ]
};

export const CryptTrick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.40 12.00 a 8.60 8.60 0 1 0 17.21 0 a 8.60 8.60 0 1 0 -17.21 0" />
      <path d="M 5.79 12.00 a 6.21 6.21 0 1 1 12.43 0 a 6.21 6.21 0 1 1 -12.43 0" />
      <path d="M 20.10 12.00 L 22.10 12.00" />
      <path d="M 17.73 17.73 L 19.14 19.14" />
      <path d="M 12.00 20.10 L 12.00 22.10" />
      <path d="M 6.27 17.73 L 4.86 19.14" />
      <path d="M 3.90 12.00 L 1.90 12.00" />
      <path d="M 6.27 6.27 L 4.86 4.86" />
      <path d="M 12.00 3.90 L 12.00 1.90" />
      <path d="M 17.73 6.27 L 19.14 4.86" />
      {children}
    </svg>
  );
});

export default CryptTrick;
