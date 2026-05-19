import React from 'react';

export const iconData = {
  "id": "OlympoFuss",
  "name": "OlympoFuss",
  "category": "VX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.59 12.00 a 2.41 2.41 0 1 0 4.82 0 a 2.41 2.41 0 1 0 -4.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.75 12.00 a 4.25 4.25 0 1 0 8.50 0 a 4.25 4.25 0 1 0 -8.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.81 12.00 a 6.19 6.19 0 1 0 12.38 0 a 6.19 6.19 0 1 0 -12.38 0",
        "stroke-dasharray": "2 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.58 12.00 a 8.42 8.42 0 1 0 16.84 0 a 8.42 8.42 0 1 0 -16.84 0"
      }
    ]
  ]
};

export const OlympoFuss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.59 12.00 a 2.41 2.41 0 1 0 4.82 0 a 2.41 2.41 0 1 0 -4.82 0" />
      <path d="M 7.75 12.00 a 4.25 4.25 0 1 0 8.50 0 a 4.25 4.25 0 1 0 -8.50 0" />
      <path d="M 5.81 12.00 a 6.19 6.19 0 1 0 12.38 0 a 6.19 6.19 0 1 0 -12.38 0" stroke-dasharray="2 3" />
      <path d="M 3.58 12.00 a 8.42 8.42 0 1 0 16.84 0 a 8.42 8.42 0 1 0 -16.84 0" />
      {children}
    </svg>
  );
});

export default OlympoFuss;
