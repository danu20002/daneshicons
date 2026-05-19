import React from 'react';

export const iconData = {
  "id": "VidroSharp",
  "name": "VidroSharp",
  "category": "VE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.84 12.00 a 2.16 2.16 0 1 0 4.31 0 a 2.16 2.16 0 1 0 -4.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 12.00 a 5.14 5.14 0 1 0 10.27 0 a 5.14 5.14 0 1 0 -10.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.21 12.00 a 7.79 7.79 0 1 0 15.58 0 a 7.79 7.79 0 1 0 -15.58 0",
        "stroke-dasharray": "2 2"
      }
    ]
  ]
};

export const VidroSharp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.84 12.00 a 2.16 2.16 0 1 0 4.31 0 a 2.16 2.16 0 1 0 -4.31 0" />
      <path d="M 6.86 12.00 a 5.14 5.14 0 1 0 10.27 0 a 5.14 5.14 0 1 0 -10.27 0" />
      <path d="M 4.21 12.00 a 7.79 7.79 0 1 0 15.58 0 a 7.79 7.79 0 1 0 -15.58 0" stroke-dasharray="2 2" />
      {children}
    </svg>
  );
});

export default VidroSharp;
