import React from 'react';

export const iconData = {
  "id": "ZombiFloat",
  "name": "ZombiFloat",
  "category": "DG",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.15 5.73 L 19.02 7.22 L 18.24 7.29 L 19.21 9.79 L 17.13 7.05 L 19.21 7.16 L 16.98 7.26 L 14.52 9.62 L 15.76 8.11 L 16.12 7.06 L 15.44 5.70 L 13.84 6.45 L 15.69 9.31 L 14.98 7.12 L 13.78 7.29 L 14.86 4.42 L 12.26 4.72 L 11.46 6.50 L 12.39 8.82 L 9.98 5.97 L 10.51 5.99"
      }
    ],
    [
      "path",
      {
        "d": "M 4.42 3.15 L 2.22 4.72 L 1.00 4.93 L 1.00 7.21 L 1.35 7.61 L 4.32 4.94 L 4.30 2.27 L 4.27 2.07 L 1.31 2.48 L 4.10 4.64 L 5.92 4.42 L 3.58 5.22 L 3.83 6.02 L 3.87 4.30 L 3.35 3.66 L 1.08 1.56 L 2.82 1.00 L 1.00 2.97 L 1.00 2.34 L 1.00 1.00 L 3.88 2.96 L 6.29 1.00"
      }
    ]
  ]
};

export const ZombiFloat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.15 5.73 L 19.02 7.22 L 18.24 7.29 L 19.21 9.79 L 17.13 7.05 L 19.21 7.16 L 16.98 7.26 L 14.52 9.62 L 15.76 8.11 L 16.12 7.06 L 15.44 5.70 L 13.84 6.45 L 15.69 9.31 L 14.98 7.12 L 13.78 7.29 L 14.86 4.42 L 12.26 4.72 L 11.46 6.50 L 12.39 8.82 L 9.98 5.97 L 10.51 5.99" />
      <path d="M 4.42 3.15 L 2.22 4.72 L 1.00 4.93 L 1.00 7.21 L 1.35 7.61 L 4.32 4.94 L 4.30 2.27 L 4.27 2.07 L 1.31 2.48 L 4.10 4.64 L 5.92 4.42 L 3.58 5.22 L 3.83 6.02 L 3.87 4.30 L 3.35 3.66 L 1.08 1.56 L 2.82 1.00 L 1.00 2.97 L 1.00 2.34 L 1.00 1.00 L 3.88 2.96 L 6.29 1.00" />
      {children}
    </svg>
  );
});

export default ZombiFloat;
