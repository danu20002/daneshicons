import React from 'react';

export const iconData = {
  "id": "PlanoIodine",
  "name": "PlanoIodine",
  "category": "QU",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.72 12.00 a 2.28 2.28 0 1 0 4.55 0 a 2.28 2.28 0 1 0 -4.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 12.00 a 4.48 4.48 0 1 0 8.96 0 a 4.48 4.48 0 1 0 -8.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.92 12.00 a 6.08 6.08 0 1 0 12.16 0 a 6.08 6.08 0 1 0 -12.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.69 12.00 a 8.31 8.31 0 1 0 16.62 0 a 8.31 8.31 0 1 0 -16.62 0",
        "stroke-dasharray": "5 2"
      }
    ]
  ]
};

export const PlanoIodine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.72 12.00 a 2.28 2.28 0 1 0 4.55 0 a 2.28 2.28 0 1 0 -4.55 0" />
      <path d="M 7.52 12.00 a 4.48 4.48 0 1 0 8.96 0 a 4.48 4.48 0 1 0 -8.96 0" />
      <path d="M 5.92 12.00 a 6.08 6.08 0 1 0 12.16 0 a 6.08 6.08 0 1 0 -12.16 0" />
      <path d="M 3.69 12.00 a 8.31 8.31 0 1 0 16.62 0 a 8.31 8.31 0 1 0 -16.62 0" stroke-dasharray="5 2" />
      {children}
    </svg>
  );
});

export default PlanoIodine;
