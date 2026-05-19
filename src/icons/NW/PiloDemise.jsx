import React from 'react';

export const iconData = {
  "id": "PiloDemise",
  "name": "PiloDemise",
  "category": "NW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.60 12.00 a 2.40 2.40 0 1 0 4.80 0 a 2.40 2.40 0 1 0 -4.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.00 12.00 a 4.00 4.00 0 1 0 7.99 0 a 4.00 4.00 0 1 0 -7.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.51 12.00 a 5.49 5.49 0 1 0 10.98 0 a 5.49 5.49 0 1 0 -10.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.20 12.00 a 6.80 6.80 0 1 0 13.60 0 a 6.80 6.80 0 1 0 -13.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.30 12.00 a 8.70 8.70 0 1 0 17.41 0 a 8.70 8.70 0 1 0 -17.41 0"
      }
    ]
  ]
};

export const PiloDemise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.60 12.00 a 2.40 2.40 0 1 0 4.80 0 a 2.40 2.40 0 1 0 -4.80 0" />
      <path d="M 8.00 12.00 a 4.00 4.00 0 1 0 7.99 0 a 4.00 4.00 0 1 0 -7.99 0" />
      <path d="M 6.51 12.00 a 5.49 5.49 0 1 0 10.98 0 a 5.49 5.49 0 1 0 -10.98 0" />
      <path d="M 5.20 12.00 a 6.80 6.80 0 1 0 13.60 0 a 6.80 6.80 0 1 0 -13.60 0" />
      <path d="M 3.30 12.00 a 8.70 8.70 0 1 0 17.41 0 a 8.70 8.70 0 1 0 -17.41 0" />
      {children}
    </svg>
  );
});

export default PiloDemise;
