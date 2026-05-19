import React from 'react';

export const iconData = {
  "id": "VetroTaxi",
  "name": "VetroTaxi",
  "category": "VN",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.58 17.34 L 11.81 19.04 L 10.68 17.39 L 8.91 20.22 L 9.98 22.80 L 8.95 22.11 L 9.54 22.96 L 7.00 22.06 L 4.44 22.56 L 4.09 21.01 L 4.46 21.68 L 3.44 23.00 L 5.51 22.82 L 4.83 20.89 L 2.11 20.00 L 2.25 17.01 L 4.57 16.19 L 7.46 17.46"
      }
    ],
    [
      "path",
      {
        "d": "M 9.47 12.55 L 8.85 15.22 L 6.92 16.37 L 6.87 18.21 L 9.80 18.92 L 12.30 17.67 L 10.14 16.94 L 8.98 15.02 L 10.31 17.85 L 8.13 16.53 L 10.96 16.92 L 13.50 19.39 L 11.33 21.55 L 9.21 23.00 L 8.63 23.00 L 9.34 23.00 L 9.28 22.87"
      }
    ]
  ]
};

export const VetroTaxi = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.58 17.34 L 11.81 19.04 L 10.68 17.39 L 8.91 20.22 L 9.98 22.80 L 8.95 22.11 L 9.54 22.96 L 7.00 22.06 L 4.44 22.56 L 4.09 21.01 L 4.46 21.68 L 3.44 23.00 L 5.51 22.82 L 4.83 20.89 L 2.11 20.00 L 2.25 17.01 L 4.57 16.19 L 7.46 17.46" />
      <path d="M 9.47 12.55 L 8.85 15.22 L 6.92 16.37 L 6.87 18.21 L 9.80 18.92 L 12.30 17.67 L 10.14 16.94 L 8.98 15.02 L 10.31 17.85 L 8.13 16.53 L 10.96 16.92 L 13.50 19.39 L 11.33 21.55 L 9.21 23.00 L 8.63 23.00 L 9.34 23.00 L 9.28 22.87" />
      {children}
    </svg>
  );
});

export default VetroTaxi;
