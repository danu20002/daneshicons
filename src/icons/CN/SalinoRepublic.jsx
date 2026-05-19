import React from 'react';

export const iconData = {
  "id": "SalinoRepublic",
  "name": "SalinoRepublic",
  "category": "CN",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.36 3.48 L 12.58 6.21 L 15.30 7.98 L 12.99 7.18 L 14.79 6.74 L 14.50 5.22 L 11.56 5.13 L 12.79 5.38 L 11.45 8.10 L 13.50 5.95 L 12.46 8.21 L 11.65 10.74 L 11.62 9.17 L 8.81 9.58 L 8.63 7.67 L 10.16 7.29 L 11.01 8.18 L 8.96 10.72 L 7.69 12.32"
      }
    ],
    [
      "path",
      {
        "d": "M 9.03 11.50 L 12.03 10.69 L 9.81 10.00 L 12.66 7.14 L 13.12 4.21 L 12.34 1.73 L 10.77 1.51 L 11.07 1.00 L 13.78 1.00 L 16.27 1.00 L 17.25 1.00 L 18.73 1.00 L 19.14 3.05 L 19.13 3.32 L 17.31 3.10 L 18.94 5.83 L 17.97 4.08 L 17.77 3.46 L 17.27 1.00 L 16.75 2.56 L 18.81 2.69 L 17.00 3.43 L 18.37 5.83 L 18.86 6.51 L 16.03 5.21 L 18.36 6.22 L 20.67 6.61 L 17.94 5.79 L 19.85 8.01 L 17.63 6.26 L 19.26 5.01"
      }
    ]
  ]
};

export const SalinoRepublic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.36 3.48 L 12.58 6.21 L 15.30 7.98 L 12.99 7.18 L 14.79 6.74 L 14.50 5.22 L 11.56 5.13 L 12.79 5.38 L 11.45 8.10 L 13.50 5.95 L 12.46 8.21 L 11.65 10.74 L 11.62 9.17 L 8.81 9.58 L 8.63 7.67 L 10.16 7.29 L 11.01 8.18 L 8.96 10.72 L 7.69 12.32" />
      <path d="M 9.03 11.50 L 12.03 10.69 L 9.81 10.00 L 12.66 7.14 L 13.12 4.21 L 12.34 1.73 L 10.77 1.51 L 11.07 1.00 L 13.78 1.00 L 16.27 1.00 L 17.25 1.00 L 18.73 1.00 L 19.14 3.05 L 19.13 3.32 L 17.31 3.10 L 18.94 5.83 L 17.97 4.08 L 17.77 3.46 L 17.27 1.00 L 16.75 2.56 L 18.81 2.69 L 17.00 3.43 L 18.37 5.83 L 18.86 6.51 L 16.03 5.21 L 18.36 6.22 L 20.67 6.61 L 17.94 5.79 L 19.85 8.01 L 17.63 6.26 L 19.26 5.01" />
      {children}
    </svg>
  );
});

export default SalinoRepublic;
