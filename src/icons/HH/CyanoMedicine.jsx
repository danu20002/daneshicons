import React from 'react';

export const iconData = {
  "id": "CyanoMedicine",
  "name": "CyanoMedicine",
  "category": "HH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.56 12.00 a 2.44 2.44 0 1 0 4.89 0 a 2.44 2.44 0 1 0 -4.89 0",
        "stroke-dasharray": "4 1"
      }
    ],
    [
      "path",
      {
        "d": "M 8.13 12.00 a 3.87 3.87 0 1 0 7.73 0 a 3.87 3.87 0 1 0 -7.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.52 12.00 a 5.48 5.48 0 1 0 10.96 0 a 5.48 5.48 0 1 0 -10.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.00 12.00 a 7.00 7.00 0 1 0 14.01 0 a 7.00 7.00 0 1 0 -14.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.10 12.00 a 8.90 8.90 0 1 0 17.79 0 a 8.90 8.90 0 1 0 -17.79 0",
        "stroke-dasharray": "5 3"
      }
    ]
  ]
};

export const CyanoMedicine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.56 12.00 a 2.44 2.44 0 1 0 4.89 0 a 2.44 2.44 0 1 0 -4.89 0" stroke-dasharray="4 1" />
      <path d="M 8.13 12.00 a 3.87 3.87 0 1 0 7.73 0 a 3.87 3.87 0 1 0 -7.73 0" />
      <path d="M 6.52 12.00 a 5.48 5.48 0 1 0 10.96 0 a 5.48 5.48 0 1 0 -10.96 0" />
      <path d="M 5.00 12.00 a 7.00 7.00 0 1 0 14.01 0 a 7.00 7.00 0 1 0 -14.01 0" />
      <path d="M 3.10 12.00 a 8.90 8.90 0 1 0 17.79 0 a 8.90 8.90 0 1 0 -17.79 0" stroke-dasharray="5 3" />
      {children}
    </svg>
  );
});

export default CyanoMedicine;
