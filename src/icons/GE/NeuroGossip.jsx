import React from 'react';

export const iconData = {
  "id": "NeuroGossip",
  "name": "NeuroGossip",
  "category": "GE",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.56 12.98 L 11.13 14.54 L 8.63 15.95 L 10.02 16.86 L 10.71 14.65 L 13.47 15.02 L 11.37 15.32 L 11.61 18.19 L 12.30 19.65 L 15.29 18.51 L 12.37 18.09 L 13.79 17.88 L 12.56 18.87 L 15.31 19.67 L 15.50 16.98 L 13.37 16.45 L 12.65 15.11 L 12.66 15.61 L 11.88 16.63 L 12.24 16.98 L 10.57 14.79 L 8.23 16.22"
      }
    ],
    [
      "path",
      {
        "d": "M 19.05 16.63 L 20.49 16.16 L 17.70 16.64 L 19.95 17.50 L 21.18 17.69 L 23.00 16.69 L 22.31 14.05 L 23.00 14.14 L 22.75 12.79 L 20.25 11.31 L 18.18 14.00 L 16.36 14.05 L 13.40 15.10 L 14.59 15.73 L 16.41 16.25 L 14.44 17.10 L 14.81 15.13"
      }
    ]
  ]
};

export const NeuroGossip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.56 12.98 L 11.13 14.54 L 8.63 15.95 L 10.02 16.86 L 10.71 14.65 L 13.47 15.02 L 11.37 15.32 L 11.61 18.19 L 12.30 19.65 L 15.29 18.51 L 12.37 18.09 L 13.79 17.88 L 12.56 18.87 L 15.31 19.67 L 15.50 16.98 L 13.37 16.45 L 12.65 15.11 L 12.66 15.61 L 11.88 16.63 L 12.24 16.98 L 10.57 14.79 L 8.23 16.22" />
      <path d="M 19.05 16.63 L 20.49 16.16 L 17.70 16.64 L 19.95 17.50 L 21.18 17.69 L 23.00 16.69 L 22.31 14.05 L 23.00 14.14 L 22.75 12.79 L 20.25 11.31 L 18.18 14.00 L 16.36 14.05 L 13.40 15.10 L 14.59 15.73 L 16.41 16.25 L 14.44 17.10 L 14.81 15.13" />
      {children}
    </svg>
  );
});

export default NeuroGossip;
