import React from 'react';

export const iconData = {
  "id": "StipiteMound",
  "name": "StipiteMound",
  "category": "ZE",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.44 6.21 L 5.89 4.60 L 3.70 6.19 L 2.41 8.49 L 2.48 7.59 L 2.55 6.62 L 4.64 6.79 L 3.82 5.84 L 1.97 6.41 L 1.00 6.12 L 2.51 3.19 L 3.61 2.68 L 1.34 3.03 L 1.00 1.50 L 2.08 3.67 L 1.00 5.34 L 2.92 4.86 L 1.00 2.51 L 1.00 3.41 L 3.72 4.86 L 2.44 3.16 L 3.46 3.99 L 2.95 1.34 L 4.66 1.87"
      }
    ],
    [
      "path",
      {
        "d": "M 6.21 4.31 L 8.05 4.71 L 7.01 5.67 L 6.15 8.03 L 4.16 7.63 L 5.61 6.94 L 7.88 9.38 L 5.51 9.53 L 7.95 12.05 L 7.14 14.79 L 7.29 11.80 L 6.57 12.46 L 5.59 14.51 L 2.64 16.56 L 4.48 15.66 L 2.69 15.23 L 1.35 13.28"
      }
    ],
    [
      "path",
      {
        "d": "M 3.07 19.95 L 1.03 17.56 L 1.91 15.35 L 3.12 12.78 L 2.96 11.15 L 4.34 8.60 L 5.36 8.78 L 6.46 8.50 L 8.52 9.31 L 8.04 11.75 L 8.12 14.28 L 6.96 16.70 L 4.32 15.06 L 3.73 12.51 L 3.43 10.80 L 1.68 11.75 L 1.00 12.78 L 1.00 14.45 L 2.90 14.84"
      }
    ]
  ]
};

export const StipiteMound = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.44 6.21 L 5.89 4.60 L 3.70 6.19 L 2.41 8.49 L 2.48 7.59 L 2.55 6.62 L 4.64 6.79 L 3.82 5.84 L 1.97 6.41 L 1.00 6.12 L 2.51 3.19 L 3.61 2.68 L 1.34 3.03 L 1.00 1.50 L 2.08 3.67 L 1.00 5.34 L 2.92 4.86 L 1.00 2.51 L 1.00 3.41 L 3.72 4.86 L 2.44 3.16 L 3.46 3.99 L 2.95 1.34 L 4.66 1.87" />
      <path d="M 6.21 4.31 L 8.05 4.71 L 7.01 5.67 L 6.15 8.03 L 4.16 7.63 L 5.61 6.94 L 7.88 9.38 L 5.51 9.53 L 7.95 12.05 L 7.14 14.79 L 7.29 11.80 L 6.57 12.46 L 5.59 14.51 L 2.64 16.56 L 4.48 15.66 L 2.69 15.23 L 1.35 13.28" />
      <path d="M 3.07 19.95 L 1.03 17.56 L 1.91 15.35 L 3.12 12.78 L 2.96 11.15 L 4.34 8.60 L 5.36 8.78 L 6.46 8.50 L 8.52 9.31 L 8.04 11.75 L 8.12 14.28 L 6.96 16.70 L 4.32 15.06 L 3.73 12.51 L 3.43 10.80 L 1.68 11.75 L 1.00 12.78 L 1.00 14.45 L 2.90 14.84" />
      {children}
    </svg>
  );
});

export default StipiteMound;
