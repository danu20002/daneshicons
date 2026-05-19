import React from 'react';

export const iconData = {
  "id": "ClaroGreen",
  "name": "ClaroGreen",
  "category": "HH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.64 12.00 a 2.36 2.36 0 1 0 4.72 0 a 2.36 2.36 0 1 0 -4.72 0"
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
        "d": "M 5.54 12.00 a 6.46 6.46 0 1 0 12.93 0 a 6.46 6.46 0 1 0 -12.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.81 12.00 a 8.19 8.19 0 1 0 16.38 0 a 8.19 8.19 0 1 0 -16.38 0",
        "stroke-dasharray": "2 2"
      }
    ]
  ]
};

export const ClaroGreen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.64 12.00 a 2.36 2.36 0 1 0 4.72 0 a 2.36 2.36 0 1 0 -4.72 0" />
      <path d="M 7.69 12.00 a 4.31 4.31 0 1 0 8.62 0 a 4.31 4.31 0 1 0 -8.62 0" />
      <path d="M 5.54 12.00 a 6.46 6.46 0 1 0 12.93 0 a 6.46 6.46 0 1 0 -12.93 0" />
      <path d="M 3.81 12.00 a 8.19 8.19 0 1 0 16.38 0 a 8.19 8.19 0 1 0 -16.38 0" stroke-dasharray="2 2" />
      {children}
    </svg>
  );
});

export default ClaroGreen;
