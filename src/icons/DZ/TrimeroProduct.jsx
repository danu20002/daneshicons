import React from 'react';

export const iconData = {
  "id": "TrimeroProduct",
  "name": "TrimeroProduct",
  "category": "DZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.21 6.11 L 4.67 3.82 L 5.53 3.66 L 6.74 2.32 L 8.25 3.48 L 10.40 1.22 L 11.75 3.26 L 9.14 1.87 L 11.01 1.84 L 13.62 1.00 L 14.78 2.69 L 15.03 5.67 L 13.99 4.38 L 14.66 3.72 L 12.30 4.34 L 10.90 2.49 L 8.32 4.35 L 6.86 3.40 L 9.04 2.51 L 9.40 2.81 L 6.79 1.00 L 4.62 3.20 L 5.90 5.17 L 8.62 3.10 L 9.68 3.11 L 11.92 6.04 L 10.12 8.34 L 8.80 7.07 L 10.21 5.32 L 11.59 4.25 L 12.51 5.12"
      }
    ]
  ]
};

export const TrimeroProduct = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.21 6.11 L 4.67 3.82 L 5.53 3.66 L 6.74 2.32 L 8.25 3.48 L 10.40 1.22 L 11.75 3.26 L 9.14 1.87 L 11.01 1.84 L 13.62 1.00 L 14.78 2.69 L 15.03 5.67 L 13.99 4.38 L 14.66 3.72 L 12.30 4.34 L 10.90 2.49 L 8.32 4.35 L 6.86 3.40 L 9.04 2.51 L 9.40 2.81 L 6.79 1.00 L 4.62 3.20 L 5.90 5.17 L 8.62 3.10 L 9.68 3.11 L 11.92 6.04 L 10.12 8.34 L 8.80 7.07 L 10.21 5.32 L 11.59 4.25 L 12.51 5.12" />
      {children}
    </svg>
  );
});

export default TrimeroProduct;
