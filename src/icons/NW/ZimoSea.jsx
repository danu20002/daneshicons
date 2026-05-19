import React from 'react';

export const iconData = {
  "id": "ZimoSea",
  "name": "ZimoSea",
  "category": "NW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.74 12.00 a 2.26 2.26 0 1 0 4.52 0 a 2.26 2.26 0 1 0 -4.52 0",
        "stroke-dasharray": "6 1"
      }
    ],
    [
      "path",
      {
        "d": "M 8.19 12.00 a 3.81 3.81 0 1 0 7.62 0 a 3.81 3.81 0 1 0 -7.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.73 12.00 a 5.27 5.27 0 1 0 10.53 0 a 5.27 5.27 0 1 0 -10.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.87 12.00 a 7.13 7.13 0 1 0 14.26 0 a 7.13 7.13 0 1 0 -14.26 0",
        "stroke-dasharray": "6 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 12.00 a 8.67 8.67 0 1 0 17.34 0 a 8.67 8.67 0 1 0 -17.34 0"
      }
    ]
  ]
};

export const ZimoSea = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.74 12.00 a 2.26 2.26 0 1 0 4.52 0 a 2.26 2.26 0 1 0 -4.52 0" stroke-dasharray="6 1" />
      <path d="M 8.19 12.00 a 3.81 3.81 0 1 0 7.62 0 a 3.81 3.81 0 1 0 -7.62 0" />
      <path d="M 6.73 12.00 a 5.27 5.27 0 1 0 10.53 0 a 5.27 5.27 0 1 0 -10.53 0" />
      <path d="M 4.87 12.00 a 7.13 7.13 0 1 0 14.26 0 a 7.13 7.13 0 1 0 -14.26 0" stroke-dasharray="6 2" />
      <path d="M 3.33 12.00 a 8.67 8.67 0 1 0 17.34 0 a 8.67 8.67 0 1 0 -17.34 0" />
      {children}
    </svg>
  );
});

export default ZimoSea;
