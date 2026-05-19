import React from 'react';

export const iconData = {
  "id": "SchemaHat",
  "name": "SchemaHat",
  "category": "VE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.64 12.00 a 2.36 2.36 0 1 0 4.73 0 a 2.36 2.36 0 1 0 -4.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.02 12.00 a 3.98 3.98 0 1 0 7.96 0 a 3.98 3.98 0 1 0 -7.96 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 6.76 12.00 a 5.24 5.24 0 1 0 10.47 0 a 5.24 5.24 0 1 0 -10.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.73 12.00 a 7.27 7.27 0 1 0 14.54 0 a 7.27 7.27 0 1 0 -14.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.32 12.00 a 8.68 8.68 0 1 0 17.35 0 a 8.68 8.68 0 1 0 -17.35 0"
      }
    ]
  ]
};

export const SchemaHat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.64 12.00 a 2.36 2.36 0 1 0 4.73 0 a 2.36 2.36 0 1 0 -4.73 0" />
      <path d="M 8.02 12.00 a 3.98 3.98 0 1 0 7.96 0 a 3.98 3.98 0 1 0 -7.96 0" stroke-dasharray="6 3" />
      <path d="M 6.76 12.00 a 5.24 5.24 0 1 0 10.47 0 a 5.24 5.24 0 1 0 -10.47 0" />
      <path d="M 4.73 12.00 a 7.27 7.27 0 1 0 14.54 0 a 7.27 7.27 0 1 0 -14.54 0" />
      <path d="M 3.32 12.00 a 8.68 8.68 0 1 0 17.35 0 a 8.68 8.68 0 1 0 -17.35 0" />
      {children}
    </svg>
  );
});

export default SchemaHat;
