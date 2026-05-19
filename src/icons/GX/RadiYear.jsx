import React from 'react';

export const iconData = {
  "id": "RadiYear",
  "name": "RadiYear",
  "category": "GX",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.56 10.41 L 14.81 10.86 L 16.61 9.81 L 16.46 12.10 L 16.87 13.20 L 16.39 10.60 L 17.61 8.25 L 17.17 6.46 L 16.22 5.94 L 15.03 6.45 L 13.68 5.18 L 11.95 4.32 L 12.42 1.69 L 12.86 1.00 L 11.25 3.29 L 12.94 1.47 L 13.22 3.42 L 15.99 2.51 L 13.54 1.62 L 10.77 1.00 L 8.64 1.00 L 10.21 1.00 L 10.11 1.00 L 11.56 1.00 L 9.50 2.83 L 7.36 2.60 L 5.03 3.92"
      }
    ],
    [
      "path",
      {
        "d": "M 17.31 15.38 L 19.39 12.84 L 17.36 10.62 L 15.20 12.43 L 12.71 13.58 L 15.31 14.14 L 15.54 15.79 L 17.24 17.57 L 16.46 20.10 L 15.08 18.36 L 13.65 16.96 L 13.58 18.06 L 12.68 18.98 L 12.14 19.25 L 11.32 16.39 L 8.63 17.67"
      }
    ]
  ]
};

export const RadiYear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.56 10.41 L 14.81 10.86 L 16.61 9.81 L 16.46 12.10 L 16.87 13.20 L 16.39 10.60 L 17.61 8.25 L 17.17 6.46 L 16.22 5.94 L 15.03 6.45 L 13.68 5.18 L 11.95 4.32 L 12.42 1.69 L 12.86 1.00 L 11.25 3.29 L 12.94 1.47 L 13.22 3.42 L 15.99 2.51 L 13.54 1.62 L 10.77 1.00 L 8.64 1.00 L 10.21 1.00 L 10.11 1.00 L 11.56 1.00 L 9.50 2.83 L 7.36 2.60 L 5.03 3.92" />
      <path d="M 17.31 15.38 L 19.39 12.84 L 17.36 10.62 L 15.20 12.43 L 12.71 13.58 L 15.31 14.14 L 15.54 15.79 L 17.24 17.57 L 16.46 20.10 L 15.08 18.36 L 13.65 16.96 L 13.58 18.06 L 12.68 18.98 L 12.14 19.25 L 11.32 16.39 L 8.63 17.67" />
      {children}
    </svg>
  );
});

export default RadiYear;
