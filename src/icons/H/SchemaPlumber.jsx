import React from 'react';

export const iconData = {
  "id": "SchemaPlumber",
  "name": "SchemaPlumber",
  "category": "H",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.01 5.72 C 6.20 8.41, 7.30 10.05, 15.65 20.24"
      }
    ],
    [
      "path",
      {
        "d": "M 2.43 3.62 C 18.27 4.92, 4.41 13.37, 18.79 17.23"
      }
    ],
    [
      "path",
      {
        "d": "M 8.53 4.18 C 19.02 7.87, 17.76 12.22, 19.08 16.65"
      }
    ],
    [
      "path",
      {
        "d": "M 2.83 2.24 C 7.39 8.46, 12.21 7.72, 15.25 15.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 4.47 C 6.04 17.36, 7.95 10.34, 20.57 15.53"
      }
    ]
  ]
};

export const SchemaPlumber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.01 5.72 C 6.20 8.41, 7.30 10.05, 15.65 20.24" />
      <path d="M 2.43 3.62 C 18.27 4.92, 4.41 13.37, 18.79 17.23" />
      <path d="M 8.53 4.18 C 19.02 7.87, 17.76 12.22, 19.08 16.65" />
      <path d="M 2.83 2.24 C 7.39 8.46, 12.21 7.72, 15.25 15.00" />
      <path d="M 7.52 4.47 C 6.04 17.36, 7.95 10.34, 20.57 15.53" />
      {children}
    </svg>
  );
});

export default SchemaPlumber;
