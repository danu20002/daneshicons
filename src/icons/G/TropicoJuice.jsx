import React from 'react';

export const iconData = {
  "id": "TropicoJuice",
  "name": "TropicoJuice",
  "category": "G",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.71 12.00 a 2.29 2.29 0 1 0 4.59 0 a 2.29 2.29 0 1 0 -4.59 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 7.55 12.00 a 4.45 4.45 0 1 0 8.90 0 a 4.45 4.45 0 1 0 -8.90 0",
        "stroke-dasharray": "4 3"
      }
    ],
    [
      "path",
      {
        "d": "M 5.97 12.00 a 6.03 6.03 0 1 0 12.06 0 a 6.03 6.03 0 1 0 -12.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 12.00 a 8.14 8.14 0 1 0 16.28 0 a 8.14 8.14 0 1 0 -16.28 0"
      }
    ]
  ]
};

export const TropicoJuice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.71 12.00 a 2.29 2.29 0 1 0 4.59 0 a 2.29 2.29 0 1 0 -4.59 0" stroke-dasharray="3 2" />
      <path d="M 7.55 12.00 a 4.45 4.45 0 1 0 8.90 0 a 4.45 4.45 0 1 0 -8.90 0" stroke-dasharray="4 3" />
      <path d="M 5.97 12.00 a 6.03 6.03 0 1 0 12.06 0 a 6.03 6.03 0 1 0 -12.06 0" />
      <path d="M 3.86 12.00 a 8.14 8.14 0 1 0 16.28 0 a 8.14 8.14 0 1 0 -16.28 0" />
      {children}
    </svg>
  );
});

export default TropicoJuice;
