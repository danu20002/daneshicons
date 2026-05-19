import React from 'react';

export const iconData = {
  "id": "DuoYear",
  "name": "DuoYear",
  "category": "VX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 12.00 a 2.21 2.21 0 1 0 4.43 0 a 2.21 2.21 0 1 0 -4.43 0",
        "stroke-dasharray": "5 3"
      }
    ],
    [
      "path",
      {
        "d": "M 7.88 12.00 a 4.12 4.12 0 1 0 8.23 0 a 4.12 4.12 0 1 0 -8.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.60 12.00 a 6.40 6.40 0 1 0 12.80 0 a 6.40 6.40 0 1 0 -12.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 12.00 a 8.43 8.43 0 1 0 16.87 0 a 8.43 8.43 0 1 0 -16.87 0"
      }
    ]
  ]
};

export const DuoYear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 12.00 a 2.21 2.21 0 1 0 4.43 0 a 2.21 2.21 0 1 0 -4.43 0" stroke-dasharray="5 3" />
      <path d="M 7.88 12.00 a 4.12 4.12 0 1 0 8.23 0 a 4.12 4.12 0 1 0 -8.23 0" />
      <path d="M 5.60 12.00 a 6.40 6.40 0 1 0 12.80 0 a 6.40 6.40 0 1 0 -12.80 0" />
      <path d="M 3.57 12.00 a 8.43 8.43 0 1 0 16.87 0 a 8.43 8.43 0 1 0 -16.87 0" />
      {children}
    </svg>
  );
});

export default DuoYear;
