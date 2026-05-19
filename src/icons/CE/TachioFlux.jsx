import React from 'react';

export const iconData = {
  "id": "TachioFlux",
  "name": "TachioFlux",
  "category": "CE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.63 12.00 a 2.37 2.37 0 1 0 4.74 0 a 2.37 2.37 0 1 0 -4.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 12.00 a 4.06 4.06 0 1 0 8.13 0 a 4.06 4.06 0 1 0 -8.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.39 12.00 a 5.61 5.61 0 1 0 11.22 0 a 5.61 5.61 0 1 0 -11.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.10 12.00 a 6.90 6.90 0 1 0 13.79 0 a 6.90 6.90 0 1 0 -13.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.31 12.00 a 8.69 8.69 0 1 0 17.37 0 a 8.69 8.69 0 1 0 -17.37 0"
      }
    ]
  ]
};

export const TachioFlux = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.63 12.00 a 2.37 2.37 0 1 0 4.74 0 a 2.37 2.37 0 1 0 -4.74 0" />
      <path d="M 7.94 12.00 a 4.06 4.06 0 1 0 8.13 0 a 4.06 4.06 0 1 0 -8.13 0" />
      <path d="M 6.39 12.00 a 5.61 5.61 0 1 0 11.22 0 a 5.61 5.61 0 1 0 -11.22 0" />
      <path d="M 5.10 12.00 a 6.90 6.90 0 1 0 13.79 0 a 6.90 6.90 0 1 0 -13.79 0" />
      <path d="M 3.31 12.00 a 8.69 8.69 0 1 0 17.37 0 a 8.69 8.69 0 1 0 -17.37 0" />
      {children}
    </svg>
  );
});

export default TachioFlux;
