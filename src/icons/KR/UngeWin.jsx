import React from 'react';

export const iconData = {
  "id": "UngeWin",
  "name": "UngeWin",
  "category": "KR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.66 12.00 a 7.34 7.34 0 1 0 14.68 0 a 7.34 7.34 0 1 0 -14.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.45 12.00 a 4.55 4.55 0 1 1 9.10 0 a 4.55 4.55 0 1 1 -9.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.84 12.00 L 20.84 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.42 17.92 L 16.42 19.66"
      }
    ],
    [
      "path",
      {
        "d": "M 8.58 17.92 L 7.58 19.66"
      }
    ],
    [
      "path",
      {
        "d": "M 5.16 12.00 L 3.16 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.58 6.08 L 7.58 4.34"
      }
    ],
    [
      "path",
      {
        "d": "M 15.42 6.08 L 16.42 4.34"
      }
    ]
  ]
};

export const UngeWin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.66 12.00 a 7.34 7.34 0 1 0 14.68 0 a 7.34 7.34 0 1 0 -14.68 0" />
      <path d="M 7.45 12.00 a 4.55 4.55 0 1 1 9.10 0 a 4.55 4.55 0 1 1 -9.10 0" />
      <path d="M 18.84 12.00 L 20.84 12.00" />
      <path d="M 15.42 17.92 L 16.42 19.66" />
      <path d="M 8.58 17.92 L 7.58 19.66" />
      <path d="M 5.16 12.00 L 3.16 12.00" />
      <path d="M 8.58 6.08 L 7.58 4.34" />
      <path d="M 15.42 6.08 L 16.42 4.34" />
      {children}
    </svg>
  );
});

export default UngeWin;
