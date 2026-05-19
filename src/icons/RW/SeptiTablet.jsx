import React from 'react';

export const iconData = {
  "id": "SeptiTablet",
  "name": "SeptiTablet",
  "category": "RW",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.79 7.81 L 13.01 8.00 L 10.40 7.70 L 8.90 5.19 L 6.08 6.26 L 6.58 7.13 L 9.43 6.24 L 12.18 6.48 L 10.25 5.97 L 10.87 7.84 L 11.74 6.83 L 11.63 6.36 L 10.29 5.37 L 7.94 3.36 L 5.33 5.34 L 5.56 2.98 L 3.47 4.64 L 1.36 6.69 L 1.93 6.87 L 4.74 7.16 L 7.46 7.79 L 7.52 7.12 L 5.50 8.29 L 3.57 8.68 L 5.78 8.47 L 3.59 5.72 L 6.26 4.84 L 3.47 3.53 L 2.48 2.04 L 1.00 2.95 L 3.40 2.92 L 1.15 1.00 L 1.51 1.51 L 1.00 1.00 L 1.21 3.16"
      }
    ]
  ]
};

export const SeptiTablet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.79 7.81 L 13.01 8.00 L 10.40 7.70 L 8.90 5.19 L 6.08 6.26 L 6.58 7.13 L 9.43 6.24 L 12.18 6.48 L 10.25 5.97 L 10.87 7.84 L 11.74 6.83 L 11.63 6.36 L 10.29 5.37 L 7.94 3.36 L 5.33 5.34 L 5.56 2.98 L 3.47 4.64 L 1.36 6.69 L 1.93 6.87 L 4.74 7.16 L 7.46 7.79 L 7.52 7.12 L 5.50 8.29 L 3.57 8.68 L 5.78 8.47 L 3.59 5.72 L 6.26 4.84 L 3.47 3.53 L 2.48 2.04 L 1.00 2.95 L 3.40 2.92 L 1.15 1.00 L 1.51 1.51 L 1.00 1.00 L 1.21 3.16" />
      {children}
    </svg>
  );
});

export default SeptiTablet;
