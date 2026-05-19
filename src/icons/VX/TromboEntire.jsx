import React from 'react';

export const iconData = {
  "id": "TromboEntire",
  "name": "TromboEntire",
  "category": "VX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.70 12.00 a 2.30 2.30 0 1 0 4.61 0 a 2.30 2.30 0 1 0 -4.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.20 12.00 a 3.80 3.80 0 1 0 7.60 0 a 3.80 3.80 0 1 0 -7.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.38 12.00 a 5.62 5.62 0 1 0 11.24 0 a 5.62 5.62 0 1 0 -11.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 12.00 a 7.14 7.14 0 1 0 14.29 0 a 7.14 7.14 0 1 0 -14.29 0",
        "stroke-dasharray": "4 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.37 12.00 a 8.63 8.63 0 1 0 17.26 0 a 8.63 8.63 0 1 0 -17.26 0"
      }
    ]
  ]
};

export const TromboEntire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.70 12.00 a 2.30 2.30 0 1 0 4.61 0 a 2.30 2.30 0 1 0 -4.61 0" />
      <path d="M 8.20 12.00 a 3.80 3.80 0 1 0 7.60 0 a 3.80 3.80 0 1 0 -7.60 0" />
      <path d="M 6.38 12.00 a 5.62 5.62 0 1 0 11.24 0 a 5.62 5.62 0 1 0 -11.24 0" />
      <path d="M 4.86 12.00 a 7.14 7.14 0 1 0 14.29 0 a 7.14 7.14 0 1 0 -14.29 0" stroke-dasharray="4 3" />
      <path d="M 3.37 12.00 a 8.63 8.63 0 1 0 17.26 0 a 8.63 8.63 0 1 0 -17.26 0" />
      {children}
    </svg>
  );
});

export default TromboEntire;
