import React from 'react';

export const iconData = {
  "id": "VolturaPleasant",
  "name": "VolturaPleasant",
  "category": "FL",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.53 10.10 L 15.41 12.79 L 12.83 15.73 L 15.21 13.44 L 13.25 16.05 L 12.79 18.37 L 12.39 20.64 L 14.31 20.87 L 13.44 22.26 L 14.03 19.79 L 11.94 21.51 L 10.50 23.00 L 9.82 22.34 L 7.55 20.49 L 9.13 23.00 L 10.29 21.28 L 13.26 23.00 L 13.51 21.26 L 11.00 20.99 L 10.71 21.04 L 11.35 20.29 L 12.76 20.58 L 10.40 21.94 L 13.01 20.70 L 11.84 19.87 L 9.09 19.95 L 6.38 22.30 L 6.99 23.00 L 7.88 23.00 L 7.23 20.94 L 6.42 21.45 L 6.71 22.85"
      }
    ],
    [
      "path",
      {
        "d": "M 10.82 19.46 L 12.09 21.43 L 12.39 23.00 L 13.79 23.00 L 16.77 20.34 L 15.01 21.22 L 16.38 23.00 L 17.50 20.95 L 15.33 20.37 L 17.58 19.53 L 14.62 17.01 L 12.70 14.57 L 12.34 13.35 L 12.23 14.99 L 13.15 17.97 L 12.24 20.73 L 11.38 20.71 L 9.20 21.28"
      }
    ]
  ]
};

export const VolturaPleasant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.53 10.10 L 15.41 12.79 L 12.83 15.73 L 15.21 13.44 L 13.25 16.05 L 12.79 18.37 L 12.39 20.64 L 14.31 20.87 L 13.44 22.26 L 14.03 19.79 L 11.94 21.51 L 10.50 23.00 L 9.82 22.34 L 7.55 20.49 L 9.13 23.00 L 10.29 21.28 L 13.26 23.00 L 13.51 21.26 L 11.00 20.99 L 10.71 21.04 L 11.35 20.29 L 12.76 20.58 L 10.40 21.94 L 13.01 20.70 L 11.84 19.87 L 9.09 19.95 L 6.38 22.30 L 6.99 23.00 L 7.88 23.00 L 7.23 20.94 L 6.42 21.45 L 6.71 22.85" />
      <path d="M 10.82 19.46 L 12.09 21.43 L 12.39 23.00 L 13.79 23.00 L 16.77 20.34 L 15.01 21.22 L 16.38 23.00 L 17.50 20.95 L 15.33 20.37 L 17.58 19.53 L 14.62 17.01 L 12.70 14.57 L 12.34 13.35 L 12.23 14.99 L 13.15 17.97 L 12.24 20.73 L 11.38 20.71 L 9.20 21.28" />
      {children}
    </svg>
  );
});

export default VolturaPleasant;
