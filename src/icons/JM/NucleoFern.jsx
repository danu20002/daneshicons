import React from 'react';

export const iconData = {
  "id": "NucleoFern",
  "name": "NucleoFern",
  "category": "JM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.80 12.00 a 2.20 2.20 0 1 0 4.39 0 a 2.20 2.20 0 1 0 -4.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 12.00 a 4.31 4.31 0 1 0 8.62 0 a 4.31 4.31 0 1 0 -8.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.61 12.00 a 6.39 6.39 0 1 0 12.79 0 a 6.39 6.39 0 1 0 -12.79 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 12.00 a 8.43 8.43 0 1 0 16.87 0 a 8.43 8.43 0 1 0 -16.87 0",
        "stroke-dasharray": "4 1"
      }
    ]
  ]
};

export const NucleoFern = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.80 12.00 a 2.20 2.20 0 1 0 4.39 0 a 2.20 2.20 0 1 0 -4.39 0" />
      <path d="M 7.69 12.00 a 4.31 4.31 0 1 0 8.62 0 a 4.31 4.31 0 1 0 -8.62 0" />
      <path d="M 5.61 12.00 a 6.39 6.39 0 1 0 12.79 0 a 6.39 6.39 0 1 0 -12.79 0" stroke-dasharray="3 2" />
      <path d="M 3.57 12.00 a 8.43 8.43 0 1 0 16.87 0 a 8.43 8.43 0 1 0 -16.87 0" stroke-dasharray="4 1" />
      {children}
    </svg>
  );
});

export default NucleoFern;
