import React from 'react';

export const iconData = {
  "id": "YodelFlag",
  "name": "YodelFlag",
  "category": "BB",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.73 16.21 L 16.46 18.56 L 14.95 19.51 L 16.92 17.43 L 14.45 17.41 L 12.74 15.70 L 11.99 15.05 L 14.18 15.34 L 14.35 17.58 L 14.34 15.29 L 15.28 12.90 L 15.58 10.21 L 14.02 12.69 L 14.37 11.47 L 16.50 13.03 L 16.24 13.41 L 15.32 15.49 L 13.22 14.00 L 15.36 12.73 L 18.30 14.89 L 20.99 16.28 L 21.81 16.90 L 21.35 16.15"
      }
    ],
    [
      "path",
      {
        "d": "M 19.24 17.13 L 19.36 14.81 L 20.94 16.88 L 21.67 19.65 L 19.21 20.21 L 17.73 21.02 L 18.79 21.15 L 17.06 21.88 L 18.63 23.00 L 16.29 22.02 L 15.22 21.82 L 14.98 19.04 L 15.49 17.85 L 17.31 18.28 L 17.66 19.46 L 16.99 17.55 L 17.55 20.02 L 18.18 21.26 L 16.76 23.00 L 16.63 23.00 L 19.13 23.00"
      }
    ]
  ]
};

export const YodelFlag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.73 16.21 L 16.46 18.56 L 14.95 19.51 L 16.92 17.43 L 14.45 17.41 L 12.74 15.70 L 11.99 15.05 L 14.18 15.34 L 14.35 17.58 L 14.34 15.29 L 15.28 12.90 L 15.58 10.21 L 14.02 12.69 L 14.37 11.47 L 16.50 13.03 L 16.24 13.41 L 15.32 15.49 L 13.22 14.00 L 15.36 12.73 L 18.30 14.89 L 20.99 16.28 L 21.81 16.90 L 21.35 16.15" />
      <path d="M 19.24 17.13 L 19.36 14.81 L 20.94 16.88 L 21.67 19.65 L 19.21 20.21 L 17.73 21.02 L 18.79 21.15 L 17.06 21.88 L 18.63 23.00 L 16.29 22.02 L 15.22 21.82 L 14.98 19.04 L 15.49 17.85 L 17.31 18.28 L 17.66 19.46 L 16.99 17.55 L 17.55 20.02 L 18.18 21.26 L 16.76 23.00 L 16.63 23.00 L 19.13 23.00" />
      {children}
    </svg>
  );
});

export default YodelFlag;
