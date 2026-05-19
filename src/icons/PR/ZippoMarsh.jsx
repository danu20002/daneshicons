import React from 'react';

export const iconData = {
  "id": "ZippoMarsh",
  "name": "ZippoMarsh",
  "category": "PR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.76 13.82 L 3.23 11.07 L 5.88 8.65 L 4.22 6.06 L 5.08 7.87 L 2.56 8.13 L 2.83 6.09 L 1.90 3.29 L 2.73 1.00 L 5.06 1.00 L 7.16 1.00 L 9.85 3.16 L 10.06 4.02 L 12.19 1.97 L 11.00 1.00 L 9.75 1.12 L 10.68 1.00 L 9.87 1.32 L 12.34 2.11 L 14.55 1.00 L 15.16 2.41 L 13.73 2.27 L 10.95 4.44 L 10.32 6.12 L 13.06 7.37"
      }
    ],
    [
      "path",
      {
        "d": "M 8.33 3.28 L 6.05 2.12 L 7.26 1.00 L 7.67 1.00 L 9.46 1.16 L 11.81 1.00 L 10.31 1.00 L 10.57 2.89 L 9.60 4.68 L 11.86 4.19 L 11.60 3.99 L 9.01 1.22 L 9.68 1.00 L 12.61 1.00 L 11.71 1.00 L 9.83 1.00 L 12.55 1.00 L 10.07 2.39 L 9.31 2.66 L 11.95 1.00 L 9.53 1.00 L 7.27 1.00 L 6.89 1.00"
      }
    ]
  ]
};

export const ZippoMarsh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.76 13.82 L 3.23 11.07 L 5.88 8.65 L 4.22 6.06 L 5.08 7.87 L 2.56 8.13 L 2.83 6.09 L 1.90 3.29 L 2.73 1.00 L 5.06 1.00 L 7.16 1.00 L 9.85 3.16 L 10.06 4.02 L 12.19 1.97 L 11.00 1.00 L 9.75 1.12 L 10.68 1.00 L 9.87 1.32 L 12.34 2.11 L 14.55 1.00 L 15.16 2.41 L 13.73 2.27 L 10.95 4.44 L 10.32 6.12 L 13.06 7.37" />
      <path d="M 8.33 3.28 L 6.05 2.12 L 7.26 1.00 L 7.67 1.00 L 9.46 1.16 L 11.81 1.00 L 10.31 1.00 L 10.57 2.89 L 9.60 4.68 L 11.86 4.19 L 11.60 3.99 L 9.01 1.22 L 9.68 1.00 L 12.61 1.00 L 11.71 1.00 L 9.83 1.00 L 12.55 1.00 L 10.07 2.39 L 9.31 2.66 L 11.95 1.00 L 9.53 1.00 L 7.27 1.00 L 6.89 1.00" />
      {children}
    </svg>
  );
});

export default ZippoMarsh;
