import React from 'react';

export const iconData = {
  "id": "ScapoCrucible",
  "name": "ScapoCrucible",
  "category": "OC",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.63 15.74 C 20.40 9.33, 10.91 19.65, 18.17 8.62"
      }
    ],
    [
      "path",
      {
        "d": "M 11.79 2.58 L 20.64 2.85 L 4.20 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.36 5.27 A 4.80 4.45 63 0 0 21.30 20.91"
      }
    ],
    [
      "path",
      {
        "d": "M 19.76 8.81 C 18.28 11.87, 15.03 11.32, 16.82 2.77"
      }
    ],
    [
      "path",
      {
        "d": "M 16.62 12.00 A 3.40 4.00 60 0 1 7.08 11.97"
      }
    ]
  ]
};

export const ScapoCrucible = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.63 15.74 C 20.40 9.33, 10.91 19.65, 18.17 8.62" />
      <path d="M 11.79 2.58 L 20.64 2.85 L 4.20 12.00" />
      <path d="M 19.36 5.27 A 4.80 4.45 63 0 0 21.30 20.91" />
      <path d="M 19.76 8.81 C 18.28 11.87, 15.03 11.32, 16.82 2.77" />
      <path d="M 16.62 12.00 A 3.40 4.00 60 0 1 7.08 11.97" />
      {children}
    </svg>
  );
});

export default ScapoCrucible;
