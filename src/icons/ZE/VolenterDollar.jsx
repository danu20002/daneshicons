import React from 'react';

export const iconData = {
  "id": "VolenterDollar",
  "name": "VolenterDollar",
  "category": "ZE",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.20 14.18 L 5.79 13.23 L 8.09 11.39 L 8.11 13.28 L 6.76 10.38 L 4.96 7.92 L 7.04 9.87 L 6.14 9.93 L 3.75 12.91 L 4.30 12.69 L 5.23 11.95 L 4.44 10.02 L 1.50 8.77 L 4.14 11.06 L 2.69 11.78 L 4.95 12.26 L 1.96 12.06 L 3.90 10.37 L 3.76 7.70 L 4.95 7.63 L 3.53 5.22 L 2.77 6.62 L 2.28 7.03 L 1.00 8.72 L 1.00 6.69 L 3.95 4.65 L 5.80 3.60 L 7.17 3.42 L 5.70 3.26"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 3.84 L 5.60 2.47 L 8.13 3.03 L 6.62 3.45 L 6.72 3.94 L 4.76 6.01 L 6.94 7.12 L 9.56 5.82 L 9.12 8.63 L 11.80 10.38 L 10.06 10.31 L 8.48 12.68 L 10.33 10.41 L 10.80 10.45 L 10.79 11.44 L 12.52 10.51 L 11.85 8.17 L 11.91 5.68 L 11.80 8.22 L 12.19 8.96 L 14.56 8.47"
      }
    ]
  ]
};

export const VolenterDollar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.20 14.18 L 5.79 13.23 L 8.09 11.39 L 8.11 13.28 L 6.76 10.38 L 4.96 7.92 L 7.04 9.87 L 6.14 9.93 L 3.75 12.91 L 4.30 12.69 L 5.23 11.95 L 4.44 10.02 L 1.50 8.77 L 4.14 11.06 L 2.69 11.78 L 4.95 12.26 L 1.96 12.06 L 3.90 10.37 L 3.76 7.70 L 4.95 7.63 L 3.53 5.22 L 2.77 6.62 L 2.28 7.03 L 1.00 8.72 L 1.00 6.69 L 3.95 4.65 L 5.80 3.60 L 7.17 3.42 L 5.70 3.26" />
      <path d="M 7.31 3.84 L 5.60 2.47 L 8.13 3.03 L 6.62 3.45 L 6.72 3.94 L 4.76 6.01 L 6.94 7.12 L 9.56 5.82 L 9.12 8.63 L 11.80 10.38 L 10.06 10.31 L 8.48 12.68 L 10.33 10.41 L 10.80 10.45 L 10.79 11.44 L 12.52 10.51 L 11.85 8.17 L 11.91 5.68 L 11.80 8.22 L 12.19 8.96 L 14.56 8.47" />
      {children}
    </svg>
  );
});

export default VolenterDollar;
