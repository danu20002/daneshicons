import React from 'react';

export const iconData = {
  "id": "PlacoWheel",
  "name": "PlacoWheel",
  "category": "DG",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.17 9.01 L 19.50 9.65 L 20.07 7.57 L 20.86 6.93 L 23.00 7.91 L 21.28 5.25 L 23.00 7.58 L 23.00 5.17 L 23.00 6.65 L 20.12 4.56 L 22.75 6.78 L 20.37 4.60 L 22.79 2.04 L 23.00 1.94 L 20.50 3.35 L 18.01 5.41 L 18.82 2.88"
      }
    ],
    [
      "path",
      {
        "d": "M 5.39 11.30 L 8.05 9.20 L 10.61 8.90 L 9.58 11.17 L 11.89 9.35 L 9.24 6.76 L 7.40 5.00 L 9.87 5.02 L 10.86 6.67 L 10.74 6.77 L 8.61 4.64 L 9.84 7.18 L 12.00 10.04 L 10.97 11.00 L 13.12 12.38 L 14.81 14.92 L 12.46 17.59 L 14.39 17.19 L 14.95 19.97 L 14.63 22.02 L 13.07 22.63 L 13.29 23.00 L 14.25 20.83 L 11.95 20.87 L 11.02 18.53 L 8.55 17.33"
      }
    ]
  ]
};

export const PlacoWheel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.17 9.01 L 19.50 9.65 L 20.07 7.57 L 20.86 6.93 L 23.00 7.91 L 21.28 5.25 L 23.00 7.58 L 23.00 5.17 L 23.00 6.65 L 20.12 4.56 L 22.75 6.78 L 20.37 4.60 L 22.79 2.04 L 23.00 1.94 L 20.50 3.35 L 18.01 5.41 L 18.82 2.88" />
      <path d="M 5.39 11.30 L 8.05 9.20 L 10.61 8.90 L 9.58 11.17 L 11.89 9.35 L 9.24 6.76 L 7.40 5.00 L 9.87 5.02 L 10.86 6.67 L 10.74 6.77 L 8.61 4.64 L 9.84 7.18 L 12.00 10.04 L 10.97 11.00 L 13.12 12.38 L 14.81 14.92 L 12.46 17.59 L 14.39 17.19 L 14.95 19.97 L 14.63 22.02 L 13.07 22.63 L 13.29 23.00 L 14.25 20.83 L 11.95 20.87 L 11.02 18.53 L 8.55 17.33" />
      {children}
    </svg>
  );
});

export default PlacoWheel;
